# mozilla-platform-ops/pypi

this page hosts links to python packages.

it can be used by pip like so:

```bash
pip install ${package} --no-index --find-links https://mozilla-platform-ops.github.io/pypi

```

or to make a package listed here available to your try push, modify [mozharness/base/python.py](https://hg.mozilla.org/mozilla-central/file/578715b/testing/mozharness/mozharness/base/python.py#l78) before your push to contain this page url. eg:
```diff
-"default": ["https://pypi.pub.build.mozilla.org/pub/"],
+"default": ["https://pypi.pub.build.mozilla.org/pub/", "https://mozilla-platform-ops.github.io/pypi"],
```

to add a package link, edit [packageUrls.json](https://github.com/mozilla-platform-ops/pypi/edit/main/packageUrls.json).

---
