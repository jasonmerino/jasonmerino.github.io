---
layout: post
metaTitle:  "Use invoke to change properties on each model in Backbone collection"
date:   2014-07-02 22:10:03
categories: backbone quick-tip
---

Here's a quick tip. If you need to set the same property on each model in a Backbone collection check out the following snippet.

```javascript
this.collectionName.invoke('set', {
	isSet: true
});
```

Invoke can be used as a slightly cleaner version of this.

```javascript
this.collectionName.each(function(model) {
	model.set({
		isSet: true
	});
});
```

Happy coding!