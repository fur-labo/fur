Generating Favicon
------------------

### Favicon Examples

| Image | Command |
| ----- | ------- |
{{#each faviconExample}}| <img src="./docs/examples/images/example-{{lowercase text}}-favicon.png" height="40" style="height:40px;" /> | ` $ fur favicon {{#each this}}--{{spinalcase @key}}="{{this}}" {{/each}} ` |
{{/each}}


### Favicon Usage

```bash
$ fur favicon -h

{{{usages.favicon}}}
```


