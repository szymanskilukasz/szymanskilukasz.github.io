---
layout: post
title: Text Retrieval - part 1
permalink: text-retrieval-part-1
---


Probably you've heard about some great search platforms like [Elasticsearch](https://www.elastic.co/products/elasticsearch) or [Solr](http://lucene.apache.org/solr/) - they have one thing in common, they are built on top of the powerful search engine [Apache Lucene](https://lucene.apache.org/core/). To provide such powerful features Apache Lucene implements solutions for problem defined as a **Text Retrieval**.

## What is text retrieval?

We can define it as a task where the system responds to user query with relevant documents. The best example of course will be Google search engine - user types query and in response gets suitable web pages. Sounds easy right? Well, not quite.

The main problem is that we can't mathematically prove that one method is better than another. Our challenge is to design most effective ranking function, and empirically evaluate it - involving users which will going to use are search engine.

## Mathematics

Lets define our problem

**Vocabulary**: V = {w<sub>1</sub>,...,w<sub>N</sub>} - *Set of words - might be multiple languages.*

***Query***: q = q<sub>1</sub>,...,q<sub>m</sub> where qi &#8712; V

**Document**: d<sub>i</sub> = d<sub>i1</sub>,...,d<sub>imj</sub> where d<sub>ij</sub> &#8712; V

**Collection**: C = {d<sub>1</sub>,...,d<sub>M</sub>}

**Set of relevant documents**: R(q) &#8838; C

Our task is to compute R'(q), an approximation of R(q)

## How  to compute R'(q)

We can use one of the following techniques.

**Document selection**

$$ R'(q) = \{d \in C \vert f(d,q) = 1\} $$ *where* $$ f(d,q) \in \{0,1\} $$

f(d,q) here is binary classifier - system decides is a doc is relevant or not.


**Document ranking**

$$ R'(q) = \{d \in C \vert f(d,q) > \theta \} $$

*where* $$ f(d,q) \in \Re $$ is a relevance measure function;

$$ \theta $$ is a cutoff determined by the user

## Document selection vs ranking

Main problem with the document selection classifier is fact, that it is very hard to make it accurate. Most of the time it will be over-constrained or under-constrained - it will have no relevant documents to return or it will have it too much.

Even if we make our classifier highly accurate, we must remember that **documents are not equally relevant** - they need have a prioritization.

Because of that **document ranking is generally preferred**.

## Retrieval models

As I said before our goal is to design most effective ranking function. We can tell that our ranking function is good when it ranks relevant documents on top of non-releveant documents.

OK, but - what means **relevant**?

How we can measure that document *"d"* is relevant to query *"q"*?

Retrieval models are our answer for **relevance** formalization.

### Common ideas

Lets assume that we have a query like

> q = "**<span style="color: #C75646">Best</span> <span style="color: #8EB33B">Retrieval</span> <span style="color: #72B3CC">Models</span>**"



So our ranking function will be

> f(q="**<span style="color: #C75646">Best</span> <span style="color: #8EB33B">Retrieval</span> <span style="color: #72B3CC">Models</span>**", d)

Score of query would be based on each individual word

1. g("<span style="color: #C75646">**Best**</span>", d)
2. g("<span style="color: #8EB33B">**Retrieval**</span>", d)
3. g("<span style="color: #72B3CC">**Models**</span>", d)

How to calculate the score?

**Term Frequency (TF)** - How many times word occur in document *"d"*, e.g.

1. How many times does "<span style="color: #C75646">**Best**</span>" occur in document *"d"*?
2. How many times does "<span style="color: #8EB33B">**Retrieval**</span>" occur in document *"d"*?
3. How many times does "<span style="color: #72B3CC">**Models**</span>" occur in document *"d"*?

**Document Length** - How long is document "*d*"?

If term occurs with equal frequency, but one of the documents is shorter the score will be higher. Same in the other hand - if document is longer, there is higher probability that term occurs in that document.

**Document Frequency** - How often do we see a word in entire collection?

If term is a common term, score will be smaller.


## Summary

Now you know what text retrieval is, why document ranking is better than selection and what are common ideas that retrieval models rely on.

In the next part we will talk about **Vector Space Model** as an example of retrieval model.
