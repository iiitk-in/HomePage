---
title: "Storing without Knowing: Inside Port0"
description: "How Port0's Zero Trust Architecture ensures only you have access to your data"
date: 2024-04-26
author:
  name: "NotAProton"
  avatar: "https://avatars.githubusercontent.com/u/81463636?v=2"
  title: "Lead Developer, IIITK.in"
tags: ["Port0"]
---

“Why would you trust Port0?” That was our first question after deciding to build an authentication service for projects on IIITK.in. So, we determined certain principles that couldn’t be compromised on based on Zero Trust Architecture

- The server is a black box for the end user and all data sent to it should be encrypted with only the user possessing the key required to decrypt it.
- The applications requesting data cannot be trusted and should never be able to access anything without consent and remain restricted to only the data the user consented to share.
- Only the client side may be trusted, as the code running on the browser (and outgoing packets) can be monitored by the user.

After a lot of research on OAuth, End-to-end encryption, and WebCrypto APIs we came up with a system that would meet our strict requirements with reasonable performance even on mobile phones. It starts from when you set up a password:

- A 256-bit key is derived from your password.
- A hash of your password, along with the salt (a random string added to your password to prevent brute-forcing attacks) from the previous step is sent to the server.

Now any details you give Port0 are secured with AES using your 256-bit key which is the industry standard for sensitive information.

Just one problem, in [a normal OAuth flow](https://images.app.goo.gl/SWahPDYtszYro4Ki8) (the process of logging in with Port0 on an app) the server sends user data to the app in plain text which violates our first principle. So, we had to come up with a modified flow:

1. The application generates a 256-bit key pair.
2. It redirects the user to the Port0 authentication page with its public key and app identifier token as arguments.
3. The user sees a page with the name of the app, what data its requesting, and options to accept or deny.
4. If the user accepts, the Port0 client gets their vault from Port0 servers, decrypts it and then re-encrypts the requested data using the public key provided by the app in step 2.
5. The encrypted vault is then sent to Port0 servers and the Port0 client redirects back to the app with an access token.
   The app uses the access token to get the vault from the server and decrypts using its private key.

This way, the server never sees your data in plain text and you can be sure that the app only has access to the data you consented to share. We also have a system in place to revoke access tokens and keys in case an app is compromised.

All our code is open source at [GitHub](https://github.com/IIITK-in/Port0) and we’re always looking for suggestions and contributions.
If you have any questions or feedback, please feel free to reach out to us at dev@port0.iiitk.in.
