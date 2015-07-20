Generating Banners
------------------

### Banner Usage

```bash
$ fur banner -h

{{{usages.banner}}}
```

### Banner Examples

| Image | Command |
| ----- | ------- |
{{#each bannerExample}}| <img src="./images/example-{{lowercase text}}-banner.svg" height="40" style="height:40px;" /> | ` $ fur banner {{#each this}}--{{spinalcase @key}}="{{this}}" {{/each}} ` |
{{/each}}