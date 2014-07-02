---
layout: post
metaTitle:  "Prepend current branch name to commit message in git"
date:   2014-07-02 8:43:44
categories: git
---

One thing I've learned, working in computers for a while, is that if you can automate as much of your workflow as possible, then you can spend your time doing the things that really matter. So when my department received an email from one of our "higher-ups" a few months ago about starting every commit message with the name of the current branch we are working on, I was excited to automate this process.

## Enter git hooks

Git has these really cool things called hooks that you can set to execute scripts at various stages of your git workflow. These hooks can be really powerful, or just simple little helpers (like in case we are examining here). Git hooks don't travel with the repository. Hooks need to be installed in each copy of the repo you have in order for them to work consistently across all your development environments (unless you have some sort of setup script in your repo that moves the hooks into place for you). To keep our example simple we will be manually copying and pasting this script and running some commands on it to make sure it's working correctly.

Hooks are simply executable scripts that are located in `[repo]/.git/hooks/`. There are different hooks that you can tie into at various stages of your git workflow, but today we will be looking at the `prepare-commit-msg` hook.

```bash
BRANCH_NAME=$(git symbolic-ref --short HEAD)
if [ -n "$BRANCH_NAME" ] && [ "$BRANCH_NAME" != "master" ]; then
	sed -i.bak -e "1s/^/$BRANCH_NAME - /" $1
fi
```