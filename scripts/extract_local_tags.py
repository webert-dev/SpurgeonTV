import os
import json
import glob
import re
from collections import Counter

# Lista de 150 tags teológicas comuns nos sermões de Charles Spurgeon (em inglês)
SPURGEON_TAGS = [
    "Grace", "Faith", "Salvation", "Holy Spirit", "Jesus Christ", "God's Love", "Atonement",
    "Blood of Christ", "Resurrection", "Justification", "Sanctification", "Redemption",
    "Repentance", "Forgiveness", "Gospel", "Cross of Christ", "Mercy", "Patience",
    "Sovereignty", "Election", "Predestination", "Providence", "Divine Will", "Holy Trinity",
    "Eternal Life", "Heaven", "Hell", "Judgment", "Wrath of God", "Sin", "Depravity",
    "Carnal Mind", "Unbelief", "Idolatry", "Pride", "Humility", "Prayer", "Worship",
    "Praise", "Thanksgiving", "Joy in Christ", "Peace", "Comfort", "Affliction",
    "Suffering", "Persecution", "Temptation", "Spiritual Warfare", "Victory",
    "Overcoming the World", "Flesh", "New Birth", "Regeneration", "Baptism",
    "Lord's Supper", "Communion", "Church", "Body of Christ", "Saints",
    "Christian Walk", "Discipleship", "Obedience", "Holiness", "Righteousness",
    "Covenant", "Law and Gospel", "Commandments", "Old Testament", "New Testament",
    "Prophets", "Apostles", "Miracles", "Parables", "Sermon on the Mount",
    "Kingdom of God", "Second Coming", "Eschatology", "Death", "Tomb",
    "Everlasting Covenant", "Shepherd", "Lamb of God", "Lion of Judah",
    "Bread of Life", "Living Water", "Light of the World", "Way, Truth, Life",
    "Alpha and Omega", "Mediator", "Intercession", "High Priest", "King of Kings",
    "Lord of Lords", "Son of God", "Son of Man", "Incarnation", "Virgin Birth",
    "Crucifixion", "Gethsemane", "Calvary", "Golgotha", "Empty Tomb",
    "Ascension", "Pentecost", "Comforter", "Spirit of Truth", "Adoption",
    "Children of God", "Heirs of God", "Promises of God", "Faithfulness",
    "Immutability", "Omnipotence", "Omniscience", "Omnipresence", "Majesty",
    "Glory of God", "Worship in Spirit", "True Religion", "Hypocrisy", "Pharisees",
    "Publicans", "Sinners", "Publicans and Sinners", "Tax Collectors", "Prodigal Son",
    "Lost Sheep", "Good Samaritan", "Ten Virgins", "Talents", "Sower",
    "Mustard Seed", "Pearl of Great Price", "Hidden Treasure", "Narrow Gate",
    "Broad Way", "Foundation", "Cornerstone", "Living Stones", "Spiritual Temple"
]

def extract_tags_for_sermon(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read().lower()
            
        tag_counts = {}
        for tag in SPURGEON_TAGS:
            # Conta ocorrências exatas da tag no texto
            count = len(re.findall(r'\b' + re.escape(tag.lower()) + r'\b', text))
            if count > 0:
                tag_counts[tag] = count
                
        # Pega as 20 tags mais frequentes
        top_tags = sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)[:20]
        
        # Se não achou 20 tags na lista principal, adiciona palavras genéricas grandes para preencher
        tags_result = [t[0] for t in top_tags]
        
        if len(tags_result) < 20:
            words = re.findall(r'\b[a-z]{5,15}\b', text)
            common_words = [w for w, c in Counter(words).most_common(50)]
            # filtra lixo
            stop = ["which", "their", "there", "would", "could", "should", "shall", "these", "those", "about", "other"]
            for cw in common_words:
                if cw not in stop and cw.capitalize() not in tags_result:
                    tags_result.append(cw.capitalize())
                if len(tags_result) >= 20:
                    break
                    
        return tags_result
    except Exception as e:
        print(f"Erro ao ler {filepath}: {e}")
        return []

def main():
    base_dir = "chspurgeon-sermons-main"
    all_volumes = sorted(glob.glob(os.path.join(base_dir, "volume-*")))
    
    final_dict = {}
    
    for vol_path in all_volumes:
        vol_name = os.path.basename(vol_path)
        final_dict[vol_name] = {}
        sermons = sorted(glob.glob(os.path.join(vol_path, "sermon*.md")))
        
        for sermon_path in sermons:
            base = os.path.basename(sermon_path).replace(".md", "")
            # Normaliza sermon_1575 ou sermon-1575 para sermon-1575
            sermon_name = base.replace("_", "-")
            tags = extract_tags_for_sermon(sermon_path)
            final_dict[vol_name][sermon_name] = tags
            
        print(f"[{vol_name}] Processados {len(sermons)} sermões.")
        
    with open("lib/sermon_tags_en_full.json", "w", encoding="utf-8") as f:
        json.dump(final_dict, f, indent=2)
        
    print("Sucesso! Tags geradas para todos os sermões.")

if __name__ == "__main__":
    main()
