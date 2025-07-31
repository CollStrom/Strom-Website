import os

# Folder where your files are
ROOT_DIR = "."

# Mapping of old names → new names
RENAME_MAP = {
    "bootstrap": "bootstrap.js",
    "css": "css.css"
}

def rename_special_files():
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file in RENAME_MAP:
                old_path = os.path.join(root, file)
                new_path = os.path.join(root, RENAME_MAP[file])
                print(f"Renaming {file} → {RENAME_MAP[file]}")
                os.rename(old_path, new_path)

rename_special_files()
print("✅ Done! Files renamed.")

