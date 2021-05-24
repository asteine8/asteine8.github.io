del index.html
del pandoc.css
pandoc -s --from gfm --to html --highlight-style pygments intro.md -o index.html
pause