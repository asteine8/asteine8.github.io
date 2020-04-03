# Examples for Intro to LaTeX Workshop #

Alexandra Steiner - April 2020

## Example Document ##
```latex
\documentclass{article}

\title{My First \LaTeX\ Document}
\author{Jane Doe}

\begin{document}

\maketitle

Hi there, I am a document

\section{Section 1}

Nec feugiat nisl pretium fusce id. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Mi bibendum
neque egestas congue quisque egestas diam in arcu. Semper quis lectus nulla at volutpat diam ut venenatis
tellus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Adipiscing elit ut aliquam purus
sit amet luctus venenatis lectus. Neque viverra justo nec ultrices dui sapien eget. Semper risus in
hendrerit gravida rutrum quisque non. Purus in mollis nunc sed. At lectus urna duis convallis convallis
tellus id interdum velit. Pharetra pharetra massa massa ultricies mi quis. Cursus euismod quis viverra nibh
cras. Enim ut sem viverra aliquet. Cras sed felis eget velit aliquet sagittis. Massa tincidunt nunc
pulvinar sapien et ligula. Vestibulum mattis ullamcorper velit sed.

\subsection{My Equation}

\begin{equation}
f(x) = ax^2+bx+c
\end{equation}

\end{document}
```

## Hello World ##
```latex
\documentclass{article}

\begin{document}

Hello, World!

\end{document}
```

## Basic Formatting ##
```latex
\documentclass[twocolumn]{article}

\title{Yet another example document}
\author{Jane Doe}

\begin{document}

\maketitle

\tableofcontents

\section{Introduction}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. 
Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Faucibus scelerisque 
eleifend donec pretium vulputate. Vulputate ut pharetra sit amet aliquam. Diam ut venenatis tellus in metus 
vulputate. Sed augue lacus viverra vitae. Enim diam vulputate ut pharetra sit. Convallis tellus id interdum 
velit. Pretium lectus quam id leo in vitae turpis massa sed. Magnis dis parturient montes nascetur 
ridiculus mus mauris. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Mi ipsum faucibus 
vitae aliquet nec. Vel eros donec ac odio tempor orci dapibus ultrices. Adipiscing commodo elit at 
imperdiet dui accumsan sit amet nulla.

\section{Much Ado About Nothing}

Vel quam elementum pulvinar etiam non quam lacus suspendisse. Ullamcorper sit amet risus nullam eget felis 
eget. Dictum sit amet justo donec enim diam vulputate ut. Cras tincidunt lobortis feugiat vivamus at augue. 
Vestibulum sed arcu non odio euismod lacinia at quis. Netus et malesuada fames ac turpis egestas maecenas. 
Egestas sed tempus urna et. Porttitor eget dolor morbi non arcu risus quis. Amet mauris commodo quis 
imperdiet massa tincidunt nunc pulvinar sapien. Dui accumsan sit amet nulla facilisi morbi tempus iaculis 
urna. Vitae tortor condimentum lacinia quis vel eros. Ut sem viverra aliquet eget sit. Facilisis mauris sit 
amet massa. Dignissim cras tincidunt lobortis feugiat vivamus at. Mi bibendum neque egestas congue quisque
egestas diam in arcu. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. In massa tempor
nec feugiat.

\subsection{A Subsection!}

Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Massa id neque aliquam vestibulum
morbi. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Aenean euismod elementum nisi quis
eleifend. Duis at consectetur lorem donec massa sapien faucibus. Tortor id aliquet lectus proin nibh nisl
condimentum id. Tortor posuere ac ut consequat semper. Ut diam quam nulla porttitor massa id. Eu augue ut
lectus arcu bibendum. Semper eget duis at tellus at urna condimentum mattis. Feugiat in ante metus dictum
at tempor. Diam donec adipiscing tristique risus nec feugiat in. Quisque non tellus orci ac.

\section{Much Ado About Something Else}

Potenti nullam ac tortor vitae purus. Odio morbi quis commodo odio aenean sed. Laoreet id donec ultrices
tincidunt arcu non sodales neque. Pellentesque habitant morbi tristique senectus. Augue eget arcu dictum
varius duis at consectetur. Leo urna molestie at elementum. Gravida in fermentum et sollicitudin ac. Tortor
at auctor urna nunc id cursus metus. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.
Cum sociis natoque penatibus et magnis. Diam maecenas ultricies mi eget. Nullam non nisi est sit amet
facilisis magna etiam.

Dignissim sodales ut eu sem integer vitae justo eget magna. Faucibus scelerisque eleifend donec pretium
vulputate sapien. Dui vivamus arcu felis bibendum ut tristique et egestas. Elit sed vulputate mi sit amet
mauris commodo quis. Adipiscing at in tellus integer. Odio euismod lacinia at quis risus sed vulputate
odio. Varius duis at consectetur lorem donec massa sapien. Pretium viverra suspendisse potenti nullam ac.
Sit amet dictum sit amet justo donec enim diam vulputate. Quis hendrerit dolor magna eget est lorem ipsum
dolor. Volutpat ac tincidunt vitae semper quis lectus nulla. Aliquet sagittis id consectetur purus ut
faucibus pulvinar. Enim praesent elementum facilisis leo. Sed viverra ipsum nunc aliquet bibendum enim
facilisis gravida neque. Faucibus nisl tincidunt eget nullam. Pharetra diam sit amet nisl. Sed enim ut sem
viverra.
\end{document}
```

## Formetted Texts ##
```latex
\documentclass{article}

\usepackage{hyperref}

\begin{document}

This is normal text

\emph{This is italicized text}

\textbf{This is bolded text}

\underline{This text is underlined}

\url{https://www.google.com}

\href{https://www.google.com}{This is a hyperlink with substituted text}

\end{document}
```

## Lists ##
```latex
\documentclass{article}

\begin{document}

\subsection{Ordered List:}

\begin{enumerate}
    \item My first item
    \item My second item
    \item My third item
\end{enumerate}

\subsection{Unordered List:}

\begin{itemize}
    \item Carrots
    \item Peas
    \item Pasta
    \item Eggs
\end{itemize}


\end{document}
```

## Equations and References ##
```latex
\documentclass{article}

\begin{document}

Look at equation \ref{eq1}! Isn't it so cute? Although, equation \ref{eq2} tho...

\begin{equation}
f(x) = ax^2 + bx + c
\label{eq1}
\end{equation}

\begin{equation}
S=\sum_{i=1}^n f(x_i^*) \cdot \Delta x_i
\label{eq2}
\end{equation}

\end{document}
```

## Citations via BibTex ##
**bibfile.bib:**
```
@article{lemmaProof,
    title = {A Short Proof of the Wonderful Lemma},
    author = {Maria Chudnovsky},
    institution = {Princeton University},
    year = {2017}
}

@article{primeProof,
    title = {Newman's Short Proof of the Prime Number Theorem},
    author = {D. Zagier},
    journal = {The American Mathematical Monthly},
    volume = {104},
    number = {8},
    pages = {705-708},
    year = {1997}
}

@misc{wikipedia:dirt,
    author = "{Wikipedia contributors}",
    title = "Dirt --- {Wikipedia}{,} The Free Encyclopedia",
    year = "2020",
    url = {https://en.wikipedia.org/wiki/Dirt},
    note = "[Online; accessed 2-April-2020]"
}
```

**test.tex:**
```latex
\documentclass{article}

\usepackage{natbib}

\usepackage{hyperref}

\begin{document}

This is true \citep{lemmaProof}.

This is also true \citep{primeProof}.

Also, dirt is usually brown \citep{wikipedia:dirt}.

\bibliographystyle{apalike}
\bibliography{bibfile}

\end{document}
```