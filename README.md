# jekyll-site

To access the jekyll site's _site folder hosted here on GitHub, navigate to http://nilssanderson.github.io/jekyll-site/

Use the develop branch locally and for any changes updates as the _config.yml file does not have a base-url.
This is required for the grunt tasks to run.

The gh-pages branch is used to host the jekyll blog hosted on GitHub and has a base-url of /jekyll-site set in the _config.yml.
This is required for GitHub to serve the files/folders at http://nilssanderson.github.io/jekyll-site/.

Once you have cloned down the repo, run the following code so as not to replace the existing _config.yml file:

```
git update-index --assume-unchanged _config.yml
```

If you do need to make changes to the _config.yml file, update it directly on GitHub.
