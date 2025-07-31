import os
import re

# --- CONFIG ---
ROOT_DIR = "."  # Where your HTML files are
FIX_DOUBLE_EXT = True  # Set to True to fix .jpg.png -> .jpg

def rename_folders():
    """Rename folders with spaces to use underscores."""
    for root, dirs, _ in os.walk(ROOT_DIR):
        for d in dirs:
            if " " in d:
                new_name = d.replace(" ", "_").replace("&", "and")
                old_path = os.path.join(root, d)
                new_path = os.path.join(root, new_name)
                print(f"Renaming folder: {old_path} -> {new_path}")
                os.rename(old_path, new_path)

def fix_html_paths():
    """Fix HTML paths for renamed folders and images."""
    html_files = [f for f in os.listdir(ROOT_DIR) if f.endswith(".html")]
    
    for html_file in html_files:
        file_path = os.path.join(ROOT_DIR, html_file)
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace spaces in _files folder references
        content = re.sub(r"([\w]+)\s-\sStrom\sGroup_files", 
                         lambda m: m.group(1) + "_StromGroup_files", content)

        # Optionally fix .jpg.png -> .jpg
        if FIX_DOUBLE_EXT:
            content = re.sub(r"\.jpg\.png", ".jpg", content)
            content = re.sub(r"\.png\.png", ".png", content)

        # Save changes
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        
        print(f"✅ Fixed paths in: {html_file}")

if __name__ == "__main__":
    print("🚀 Renaming folders...")
    rename_folders()
    
    print("\n🚀 Fixing HTML paths...")
    fix_html_paths()
    
    print("\n✅ Done! Now redeploy with `firebase deploy`.")
