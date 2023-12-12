# Quizcast

Quizcast is a theme for [Hugo](https://gohugo.io/) that presents a quiz using [Slidy2](https://www.w3.org/Talks/Tools/Slidy2/).

## Usage

You can use the `question` archetype to create questions. It contains some information on its usage.

Intermissions can be created using the `intermission` archetype.

Introduction slides can be created using the `intro` archetype. These will be placed at the beginning of the quiz. Introduction slides can use weights independent of questions and intermissions.

## Suggestions for Site Configuration

To minimize the number of pages created, I suggest you use the [`disableKinds` configuration option](https://gohugo.io/getting-started/configuration/#all-configuration-settings). I have found that the following (in TOML) eliminates all pages except the one page for the slideshow:

```
disableKinds = ["RSS", "sitemap", "taxonomy", "taxonomyTerm"]
```

## License

Quizcast is available under the MIT License. Refer to `LICENSE.txt` for details.

Files under `static/slidy` are taken from Slidy2. Copyright (c) 2005-2010 W3C (MIT, ERCIM, Keio), All Rights Reserved. See the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents) and the [W3C Software and Document Notice and License](https://www.w3.org/Consortium/Legal/copyright-software) for licensing terms. Some of my own modifications have been made, which are available under the same terms.