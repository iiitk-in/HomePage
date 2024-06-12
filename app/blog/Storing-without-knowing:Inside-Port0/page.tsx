"use server";
import Navbar from "@/app/components/Navbar";
import BlogTitle from "../components/BlogTitle";
import BlogDescription from "../components/BlogDescription";
import BlogBody from "../components/BlogBody";
import BlogSection from "../components/BlogSection";
import BlogList from "../components/BlogList";
import BlogListElement from "../components/BlogListElement";
import BlogLink from "../components/BlogLink";

const Blog = () => {
  return (
    <div className="overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div>
        <Navbar currentPage="Blog" />
      </div>
      <div className="mx-10 ml-12 mr-12 sm:w-[720px] mt-12 flex flex-col sm:ml-auto sm:mr-auto justify-center  items-center ">
        <div className="flex flex-col justify-center">
          <BlogTitle title="Storing without Knowing: Inside Port0" />
          <BlogDescription
            date="April 26, 2024"
            author="Akshat Saraswat"
            position="Lead Developer"
          />
          <BlogBody>
            <BlogSection>
              <i>
                How Port0&apos;s Zero Trust Architecture ensures only you have
                access to your data
              </i>
            </BlogSection>
            <BlogSection>
              “Why would you trust Port0?” That was our first question after
              deciding to build an authentication service for projects on
              IIITK.in. So, we determined certain principles that couldn&apos;t
              be compromised on based on Zero Trust Architecture
            </BlogSection>
            <BlogList>
              <BlogListElement>
                The server is a black box for the end user and all data sent to
                it should be encrypted with only the user possessing the key
                required to decrypt it.
              </BlogListElement>
              <BlogListElement>
                The applications requesting data cannot be trusted and should
                never be able to access anything without consent and remain
                restricted to only the data the user consented to share.
              </BlogListElement>
              <BlogListElement>
                Only the client side may be trusted, as the code running on the
                browser (and outgoing packets) can be monitored by the user.
              </BlogListElement>
            </BlogList>
            <BlogSection>
              After a lot of research on OAuth, End-to-end encryption, and
              WebCrypto APIs we came up with a system that would meet our strict
              requirements with reasonable performance even on mobile phones. It
              starts from when you set up a password:
            </BlogSection>
            <BlogList>
              <BlogListElement>
                A 256-bit key is derived from your password.
              </BlogListElement>
              <BlogListElement>
                A hash of your password, along with the salt (a random string
                added to your password to prevent brute-forcing attacks) from
                the previous step is sent to the server.
              </BlogListElement>
            </BlogList>
            <BlogSection>
              Now any details you give Port0 are secured with AES using your
              256-bit key which is the industry standard for sensitive
              information.
            </BlogSection>
            <BlogSection>
              Just one problem, in a{" "}
              <BlogLink link="https://images.app.goo.gl/SWahPDYtszYro4Ki8">
                normal OAuth flow
              </BlogLink>{" "}
              (the process of logging in with Port0 on an app) the server sends
              user data to the app in plain text which violates our first
              principle. So, we had to come up with a modified flow:
            </BlogSection>
            <BlogList>
              <BlogListElement>
                The application generates a 256-bit key pair.
              </BlogListElement>
              <BlogListElement>
                It redirects the user to the Port0 authentication page with its
                public key and app identifier token as arguments.
              </BlogListElement>
              <BlogListElement>
                The user sees a page with the name of the app, what data its
                requesting, and options to accept or deny.
              </BlogListElement>
              <BlogListElement>
                If the user accepts, the Port0 client gets their vault from
                Port0 servers, decrypts it and then re-encrypts the requested
                data using the public key provided by the app in step 2.
              </BlogListElement>
              <BlogListElement>
                The encrypted vault is then sent to Port0 servers and the Port0
                client redirects back to the app with an access token. The app
                uses the access token to get the vault from the server and
                decrypts using its private key.
              </BlogListElement>
            </BlogList>
            <BlogSection>
              This way, the server never sees your data in plain text and you
              can be sure that the app only has access to the data you consented
              to share. We also have a system in place to revoke access tokens
              and keys in case an app is compromised.
            </BlogSection>
            <BlogSection>
              All our code is open source at{" "}
              <BlogLink link="https://github.com/IIITK-in/Port0">
                GitHub
              </BlogLink>{" "}
              and we’re always looking for suggestions and contributions.
            </BlogSection>
            <BlogSection>
              If you have any questions or feedback, please feel free to reach
              out to us at <u> dev@port0.iiitk.in.</u>
            </BlogSection>
          </BlogBody>
        </div>
      </div>
    </div>
  );
};

export default Blog;
