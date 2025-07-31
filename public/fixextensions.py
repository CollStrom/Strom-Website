from logging import root
import os

ROOT_DIR = "."  # run in the folder where your HTML/assets live

def fix_extensions():
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            old_path = os.path.join(root, file)

            # Fix .download files
            if file.endswith(".js.download"):
                new_path = os.path.join(root, file.replace(".js.download", ".js"))
                print(f"Renaming {file} → {os.path.basename(new_path)}")
                os.rename(old_path, new_path)

            # Fix .download for CSS
            elif file.endswith(".css.download"):
                new_path = os.path.join(root, file.replace(".css.download", ".css"))
                print(f"Renaming {file} → {os.path.basename(new_path)}")
                os.rename(old_path, new_path)

            # Fix JS files without .js
            elif file.lower() in ["jquery", "modernizr.js", "scroller", "innovation"]:
                new_path = os.path.join(root, file + ".js")
                print(f"Renaming {file} → {os.path.basename(new_path)}")
                os.rename(old_path, new_path)

             # If the file is EXACTLY named "css", rename to css.css
            elif file == "css":
                new_path = os.path.join(root, "css.css")
                print(f"Renaming {file} → css.css")
                os.rename(old_path, new_path)

             # If the file is EXACTLY named "bootstrap", rename to bootstrap.js
            elif file == "bootstrap":
                new_path = os.path.join(root, "bootstrap.js")
                print(f"Renaming {file} → bootstrap.js")
                os.rename(old_path, new_path)

fix_extensions()
print("✅ Done! Now check your scripts/styles again.")
