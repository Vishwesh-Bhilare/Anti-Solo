import requests
import re

def extract_username(input_str: str) -> str:
    # Accepts username OR https://github.com/username
    match = re.search(r"github\.com/([A-Za-z0-9_-]+)", input_str)
    return match.group(1) if match else input_str.strip()

def get_most_used_languages(user_input: str, top_n: int = 5) -> str:
    username = extract_username(user_input)
    headers = {"Accept": "application/vnd.github+json"}

    repos_url = f"https://api.github.com/users/{username}/repos?per_page=100"
    repos = requests.get(repos_url, headers=headers).json()

    if isinstance(repos, dict) and repos.get("message"):
        raise RuntimeError(repos["message"])

    totals = {}

    for repo in repos:
        if repo.get("fork"):
            continue

        lang_data = requests.get(repo["languages_url"], headers=headers).json()
        for lang, bytes_ in lang_data.items():
            totals[lang] = totals.get(lang, 0) + bytes_

    if not totals:
        return "No language data found"

    ranked = sorted(totals.items(), key=lambda x: x[1], reverse=True)
    return ", ".join(lang for lang, _ in ranked[:top_n])

# ---- usage ----
if __name__ == "__main__":
    user = input("GitHub username or profile URL: ")
    print(get_most_used_languages(user))
