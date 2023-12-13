+++
weight = 1

[_build]
render = "link"
+++

How is the question number determined?

1. Filename
2. File modification time
3. {{% correct %}}"weight" parameter in front matter{{% /correct %}}
4. "order" parameter in front matter

(Note: This question uses numeric choices, which is supported by standard Markdown. To use alphabetical choices, consider using Pandoc.)

{{% answer-info %}}
The "weight" parameter determines the ordering of questions and intermissions: They will be presented in order of ascending weight. Questions will be automatically numbered based on this ordering.

If the automatic numbering is not suitable for your usage, you can add the "number" parameter. The "number" parameter need not be a simple number; it can be an arbitrary string. You can also use the "title" parameter to completely override the title that is shown on the slide.

(Note that this information is only shown when the answer is shown.)
{{% /answer-info %}}