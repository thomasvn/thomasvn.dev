# Hugo (static site generator)

## Setup

```bash
# First install
brew install hugo
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
echo 'theme = "ananke"' >> config.toml
hugo new posts/my-first-post.md
hugo server -D

# Update
git submodule update --remote --merge
```

## References

- <https://themes.gohugo.io//theme/anatole/>
- <https://gohugo.io/getting-started/quick-start/>
- <https://gohugo.io/getting-started/directory-structure/>
- <https://jamstack.org/generators/>
- <https://devconnected.com/how-to-add-and-update-git-submodules/>

<!-- 
Other interesting themes:
  - https://themes.gohugo.io/themes/keepit/
  - https://themes.gohugo.io/themes/loveit/
  - https://themes.gohugo.io/themes/hugo-theme-hello-friend-ng/
  - https://themes.gohugo.io/themes/gokarna/
  - https://themes.gohugo.io/themes/hugo-profile/
  - https://themes.gohugo.io/themes/hugo-goa/
  - https://themes.gohugo.io/themes/hugo-theme-pico/
  - https://themes.gohugo.io/themes/showfolio-hugo-theme/
  - https://themes.gohugo.io/themes/hugo-sustain/
  - https://themes.gohugo.io/themes/hermit/
-->

<!--
TODO:
- KeepIt
  - fix submodule
  - default to light theme
  - code block syntax highlighting
    - https://gohugo.io/content-management/syntax-highlighting/
  - figure out how to show the different categories
- KeepIt CSS
  - add custom CSS file
  - logos for social links should be smaller
  - profile photo larger
  - description larger
- Anatole
  - Customizable css to get rid of the ugly parts of 'anatole'?
  - customize blog to use categories, tags, dates, est time to read
- setup an RSS feed for my blog?
- try to figure out how to use the bare bones version of Hugo

QUESTIONS:
-->
