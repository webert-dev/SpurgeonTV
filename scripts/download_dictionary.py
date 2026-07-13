import urllib.request
import os
import time

def download_dictionary():
    base_url = "https://raw.githubusercontent.com/neuu-org/bible-dictionary-dataset/master/data/01_parsed/"
    
    # We want public/data/dictionary/en
    target_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "data", "dictionary", "en")
    os.makedirs(target_dir, exist_ok=True)
    
    files_to_download = [f"{chr(i)}.json" for i in range(ord('a'), ord('z')+1)]
    # 'x.json' might not exist, but we will catch 404s. Also need _index.json
    files_to_download.append("_index.json")
    
    for filename in files_to_download:
        url = base_url + filename
        target_path = os.path.join(target_dir, filename)
        print(f"Downloading {filename}...")
        
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as response:
                content = response.read()
                with open(target_path, 'wb') as f:
                    f.write(content)
            print(f"Saved {filename}")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print(f"File {filename} not found (404). Skipping.")
            else:
                print(f"HTTP Error for {filename}: {e.code}")
        except Exception as e:
            print(f"Error downloading {filename}: {e}")
        
        time.sleep(0.5) # Be nice to GitHub

if __name__ == "__main__":
    download_dictionary()
    print("Download complete!")
