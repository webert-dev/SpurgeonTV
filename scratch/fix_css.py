import sys

file_path = "app/globals.css"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix user-select
content = content.replace("user-select: none;", "-webkit-user-select: none;\n  user-select: none;")
content = content.replace("-webkit-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;", "-webkit-user-select: none;\n  user-select: none;") # in case it was already there

# Fix backdrop-filter ordering
content = content.replace("backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);", "-webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);")
content = content.replace("backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);", "-webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);")
content = content.replace("backdrop-filter: blur(20px);", "-webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);")

# Fix line-clamp
content = content.replace("-webkit-line-clamp: 2;", "-webkit-line-clamp: 2;\n  line-clamp: 2;")
content = content.replace("-webkit-line-clamp: 2;\n  line-clamp: 2;\n  line-clamp: 2;", "-webkit-line-clamp: 2;\n  line-clamp: 2;")

# Fix min-height: auto (changing to min-height: 0 for compatibility)
content = content.replace("min-height: auto;", "min-height: 0;")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done fixing globals.css")
