# Add Cloudflare analytics to each html file in "public" directory
# This file must be within the same directory. `python analytics.py`

import os

analytics = """<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "8b93966c65344bf7ae92bcb0f9dd9553"}'></script>
<!-- End Cloudflare Web Analytics -->

</html>
"""

for subdir, dirs, files in os.walk("public"):
    for file in files:
        filename = os.path.join(subdir, file)
        if filename[-4:] == "html":
            print(filename)
            f = open(filename, "r")
            html = f.read()
            f.close()
            html = html.replace('</html>', '')
            html += analytics
            print(html)
            f = open(filename, "w")
            f.write(html)
            f.close()
