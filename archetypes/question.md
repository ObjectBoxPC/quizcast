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

{{% answer-info %}}
The "weight" parameter determines the ordering of questions and intermissions: They will be presented in order of ascending weight. If the "weight" parameter is not suitable as a question number, you can add the "number" parameter. The "number" parameter need not be a simple number: It can be an arbitrary string.

You can also use the "title" parameter to completely override the title that is shown on the slide.

(Note that this information is only shown when the answer is shown.)
{{% /answer-info %}}