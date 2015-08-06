Generating Logo Banner
------------------

### Banner Examples

| Image | Command |
| ----- | ------- |
{{#each bannerExample}}| <img src="./docs/examples/images/example-{{lowercase text}}-banner.png" height="40" style="height:40px;" /> | ` $ fur banner {{#each this}}--{{spinalcase @key}}="{{this}}" {{/each}} ` |
{{/each}}


### Banner Usage

```bash
$ fur banner -h

{{{usages.banner}}}
```


