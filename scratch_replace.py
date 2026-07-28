import os

target_strings = [
    "process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon-tv.vercel.app'",
    "process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv'"
]
replacement = "process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spurgeon.tv'"

for root, dirs, files in os.walk('app'):
    for file in files:
        if file.endswith('.js') or file.endswith('.mjs'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for t in target_strings:
                new_content = new_content.replace(t, replacement)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
