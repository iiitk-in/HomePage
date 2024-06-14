---
title: "Cloud: Why we did what we did"
description: "The thought process of deciding how we would eventually get IIITK.in up."
date: 2024-06-13
author:
  name: "Proximus"
  avatar: "https://avatars.githubusercontent.com/u/71581580?v=2"
  title: "Lead Developer, IIITK.in"
tags: ["IIITK.in", "DevOps"]
---

<i>The thought process of deciding how we would eventually get IIITK.in up. </i>

One of the biggest questions you ask yourself when building a service is how you will deploy it and take it from local to global.

So this is the story of how we ended up using Cloudflare Pages and Workers to deploy IIITK.in.

While choosing we had a few options to consider:

- We could have hosted it on a traditional VM based server
  provided by Azure, but that would have been expensive since the
  student pack provides only 100$ worth credits, which as I learnt
  later, runs out pretty quickly.
- We could have used a static hosting service like Vercel, but
  that would kinda limit our options in the near future.
- Some serverless service that was both cheap and could handle
  heavy operations with support for dynamic pages. Luckily for us,
  serverless was in the rise and one of the largest CDN providers,
  Cloudflare, had a service called Pages.

Now, we had used Cloudflare to host some personal small scale projects so we were pretty familiar with the services they provided and the pricing.

We decided to go with Cloudflare Pages for the front end and Cloudflare Workers for the backend, both of them were very generously provided for the price of 0$. This would give us the flexibility to host dynamic pages and serverless functions in the same place.

A bit after we deployed IIITK.in for the first time, I got interested in DevOps and started playing around with Azure VMs, Docker and Kubernetes and then I wondered, why not we just move IIITK.in to an Azure hosted VM running K8s so we could have more freedom and control over the infrastructure? Basically, run the image in a K8s cluster/ Docker container over the cloud on a static IP and route all requests to it.

I did some testing hosting Port0 on Azure and it was a success, but I noticed a problem, the cost. The cost of running a VM on Azure was way more than the cost of running a serverless container on Cloudflare, which was 0. Even running a K8s cluster on Azure drained all of my credits in a week. So, we decided to stick with Cloudflare for the time being.

So its pretty safe to say that we will be sticking with Cloudflare for the foreseeable future.
And ofcourse, as always all our code is open source at
[GitHub](https://github.com/IIITK-in/)
and we&apos;re always looking for suggestions and contributions
and if you have any questions or feedback, please feel free to
reach out to us at <u> dev@port0.iiitk.in.</u>
