import json

new_tags = {
    "sermon-9": [
        "Spiritual Liberty", "Holy Spirit", "Freedom", "Bondage", "Law and Gospel", "Grace", 
        "Deliverance", "True Liberty", "2 Corinthians 3", "Slavery of Sin", "Emancipation", 
        "Joy in Christ", "Presence of God", "Spirit of the Lord", "Christian Freedom", 
        "Redemption", "Salvation", "Justification", "Peace", "Eternal Life"
    ],
    "sermon-10": [
        "Kingly Priesthood", "Saints", "Reign on Earth", "Revelation 5", "Priesthood of Believers", 
        "Spiritual Kings", "Christ's Blood", "Worship", "Heavenly Calling", "Dignity of Christians", 
        "Prayer", "Intercession", "Sacrifice of Praise", "Glory of God", "Redemption", 
        "Eternal Kingdom", "Crown of Life", "Holiness", "Consecration", "Service"
    ],
    "sermon-11": [
        "The People's Christ", "Psalm 89", "Exaltation", "Chosen One", "Jesus as Mediator", 
        "Incarnation", "Humanity of Christ", "Divine Election", "Savior of the World", 
        "Christ's Compassion", "Sympathy of Jesus", "Lowliness", "Majesty", "Grace", 
        "Gospel Message", "Substitute", "Atonement", "Love of God", "Pardon", "Salvation"
    ],
    "sermon-12": [
        "Sleep of the Beloved", "Psalm 127", "Rest in God", "Peace of Mind", "Trust", 
        "Divine Providence", "Protection", "Comfort", "Death of Saints", "Eternal Rest", 
        "Security in Christ", "Faith", "Anxiety", "Resting in Grace", "God's Love", 
        "Quietness of Spirit", "Assurance", "Deliverance", "Blessing", "Sleep"
    ],
    "sermon-13": [
        "Consolation", "Spiritual Sufferings", "2 Corinthians 1", "Affliction", "Comfort in Trials", 
        "Christ's Sufferings", "Persecution", "Endurance", "Sympathy of Christ", "Grace in Trouble", 
        "Strength", "Faith in Adversity", "Hope", "Divine Support", "Fellowship of Suffering", 
        "Joy in Sorrow", "Promises of God", "Patience", "Eternal Reward", "Gospel"
    ],
    "sermon-14": [
        "Victory of Faith", "Overcoming the World", "1 John 5", "Born of God", "Triumph", 
        "Spiritual Warfare", "Faith", "Regeneration", "New Birth", "Worldliness", 
        "Temptation", "Belief in Christ", "Power of God", "Christian Conflict", "Assurance", 
        "Eternal Life", "Holy Spirit", "Grace", "Perseverance", "Salvation"
    ],
    "sermon-15": [
        "The Bible", "Hosea 8", "Word of God", "Scripture", "Inspiration", 
        "Divine Law", "Revelation", "Truth", "Authority of Scripture", "Neglect of the Word", 
        "Strange Thing", "Gospel Message", "Guidance", "Wisdom", "Holy Writings", 
        "Commandments", "Preaching", "Study of Scripture", "Light", "Salvation"
    ],
    "sermon-16": [
        "Paul's First Prayer", "Acts 9", "Conversion", "Prayer", "Saul of Tarsus", 
        "Repentance", "Grace", "Transformation", "Divine Intervention", "Calling", 
        "Regeneration", "Holy Spirit", "Mercy", "Forgiveness", "New Life", 
        "Christian Experience", "Submission", "Salvation", "Gospel", "Faith"
    ],
    "sermon-17": [
        "Joseph", "Archers", "Genesis 49", "Persecution", "Steadfastness", 
        "Strength in God", "Mighty God of Jacob", "Trials", "Enemies", "Faithfulness", 
        "Divine Protection", "Overcoming", "Grace", "Patience", "Providence", 
        "God's Power", "Shepherd", "Stone of Israel", "Victory", "Blessing"
    ],
    "sermon-18": [
        "Tomb of Jesus", "Matthew 28", "Resurrection", "Empty Tomb", "Death of Christ", 
        "Victory over Death", "Gospel", "Hope", "Comfort", "Easter", 
        "Salvation", "Eternal Life", "Atonement", "Christ's Sacrifice", "Glorification", 
        "Faith", "Joy", "Promises", "Redemption", "Jesus Christ"
    ],
    "sermon-19": [
        "David's Dying Song", "2 Samuel 23", "Everlasting Covenant", "Salvation", "Desire", 
        "God's Promises", "Security", "Grace", "Last Words", "Faith in Death", 
        "Divine Faithfulness", "Assurance", "Hope", "Covenant of Grace", "Redemption", 
        "Comfort", "Peace", "Eternal Life", "Mercy", "King David"
    ],
    "sermon-20": [
        "Carnal Mind", "Enmity Against God", "Romans 8", "Depravity", "Sin", 
        "Human Nature", "Rebellion", "Unregenerate", "Flesh", "Spiritual Death", 
        "Need for Grace", "Regeneration", "Holy Spirit", "Repentance", "Salvation", 
        "Gospel", "Justification", "Transformation", "Wrath of God", "Mercy"
    ],
    "sermon-21": [
        "Imitators of Christ", "Acts 4", "Boldness", "Peter and John", "Witnessing", 
        "Being with Jesus", "Christian Character", "Holiness", "Example of Christ", "Discipleship", 
        "Transformation", "Gospel Testimony", "Faith", "Holy Spirit", "Courage", 
        "Preaching", "Persecution", "Grace", "Love", "Salvation"
    ],
    "sermon-22": [
        "Presumptuous", "1 Corinthians 10", "Caution", "Falling", "Pride", 
        "Self-Confidence", "Temptation", "Humility", "Dependence on God", "Warning", 
        "Grace", "Perseverance", "Spiritual Danger", "Watchfulness", "Prayer", 
        "Faith", "Security in Christ", "Repentance", "Sin", "Salvation"
    ],
    "sermon-23": [
        "Last Battle", "Death", "1 Corinthians 15", "Sting of Death", "Sin and Law", 
        "Victory", "Resurrection", "Jesus Christ", "Triumph", "Hope", 
        "Eternal Life", "Comfort", "Gospel", "Grace", "Salvation", 
        "Fear of Death", "Atonement", "Glorification", "Faith", "Peace"
    ],
    "sermon-24": [
        "Forgiveness", "Isaiah 43", "Transgressions", "Blotting out Sin", "Mercy", 
        "Grace", "God's Sake", "Forgetting Sins", "Pardon", "Salvation", 
        "Atonement", "Love of God", "Gospel", "Repentance", "Justification", 
        "Redemption", "Divine Compassion", "Peace", "Hope", "New Life"
    ]
}

with open("lib/sermon_tags_en.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for sermon_id, tags in new_tags.items():
    data["volume-01"][sermon_id] = tags

with open("lib/sermon_tags_en.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("Tags inseridas com sucesso!")
