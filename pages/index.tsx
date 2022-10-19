import type { NextPage } from "next";
import $ from "jquery";
import { useEffect } from "react";
import { Pool } from "../components/Pool";
import Link from "next/link";

const Home: NextPage = () => {
  useEffect(() => {
    $(window).on("scroll", function () {
      $(".parallax-window-bubbles").css(
        "background-position",
        // @ts-ignore
        "50% " + $(this).scrollTop() / 4 + "px"
      );

      $(".parallax-window-meteors").css(
        "background-position",
        // @ts-ignore
        "50% " + $(this).scrollTop() / 4 + "px"
      );
    });
  });

  return (
    <div className="bg-background">
      <div className="parallax-window-meteors">
        <div className="parallax-window-bubbles ">
          <div className="menu-bg">
            <div className="container mx-auto  px-4 ">
              <div className="flex justify-center">
                <img
                  className="img-fluid"
                  width="314"
                  src="/header-logo.svg"
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          <Pool />

          <div className="container mx-auto mt-6 px-4 lg:mt-10">
            <div className="grid sm:gap-4 lg:grid-cols-2">
              <div>
                <div className="mb-4 mt-2 text-center text-5xl font-semibold text-white md:mt-8 md:text-left md:text-7xl">
                  <span className="text-primary">Who</span> we {""}
                  <span className="text-primary">are</span>
                </div>
                <p className="text-xl text-custom md:text-2xl">
                  D1fferent Capital is a private investment fund founded by 3
                  experienced crypto investors and entrepreneurs, aiming to fund
                  ambitious and innovative projects in the Web3 space.
                </p>
                <div className="survey mt-4 -ml-3 flex flex-col items-center text-lg font-semibold  lg:items-start">
                  <div className="flex w-64 flex-col rounded-lg border-2 border-violet-600 p-4 lg:mt-14">
                  <div><span className="text-violet-600"><Link href="/#what-we-do">I. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#what-we-do">What we do</Link></span></div>

                  <div><span className="text-violet-600"><Link href="/#partners">II. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#partners">Our Partners</Link></span></div>

                  <div><span className="text-violet-600"><Link href="/#vision">III. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#vision">Our Vision</Link></span></div>

                  <div><span className="text-violet-600"><Link href="/#proposal">IV. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#proposal">Our Proposal</Link></span></div>

                  <div><span className="text-violet-600"><Link href="/#how-it-works">V. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#how-it-works">What we do</Link></span></div>

                  <div><span className="text-violet-600"><Link href="/#escrow">VI. </Link></span><span style={{color:"#ffffffb8"}}><Link href="/#escrow">Escrow service</Link></span></div>
                  </div>
                </div>
              </div>

              <iframe
                className="h-72 w-full md:h-80 lg:h-96"
                src="https://player.vimeo.com/video/761767191?h=239d9318ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                title="Presentation.mp4"
              ></iframe>
            </div>
          </div>

          <div
            className="section-separator pt-14 md:mt-10 md:pt-20"
            id="what-we-do"
          >
            <div className="container mx-auto  px-4 ">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-semibold text-white">
                  What we do
                </h2>
              </div>

              <div className="text-xl">
                <p className="text-custom">
                  Over the past year and a half, we have established a strong
                  presence in the Elrond ecosystem by running a{" "}
                  <strong className="text-primary">
                    homonymous staking agency
                  </strong>{" "}
                  and various{" "}
                  <strong className="text-primary">
                    strategic partnerships
                  </strong>{" "}
                  with the
                  <strong className="text-primary"> Elrond Team</strong>.
                  Therefore, a vast majority of our investment portfolio
                  (excluding the previous personal investments of the members)
                  consists of projects developed on the Elrond network.
                </p>

                <p className="mt-4 text-custom">
                  A few of the solid projects that D1fferent Capital has
                  contributed significantly to are:
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-10 md:gap-10">
                <div className="flex flex-col items-center justify-center text-white">
                  <img src="/itheum-logo.png" alt="itheum-logo" width={150} />
                  <span className="text-lg font-semibold">
                    <span className="opacity-60">MAX ROI: </span>
                    <span className="text-primary">48x</span>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/holoride-logo.png"
                    alt="holoride-logo"
                    width={150}
                  />
                  <span className="text-lg font-semibold">
                    <span className="opacity-60">MAX ROI: </span>
                    <span className="text-primary">375x</span>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img src="/bhat-logo.png" alt="bhat-logo" width={150} />
                  <span className="text-lg font-semibold">
                    <span className="opacity-60">MAX ROI: </span>
                    <span className="text-primary">12x</span>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/age-of-zamolxis-logo.png"
                    alt="age-of-zamolxis-logo"
                    width={150}
                  />
                  <span className="text-lg font-semibold">
                    <span className="opacity-60">MAX ROI: </span>
                    <span className="text-primary">5x</span>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img src="/cantina-logo.png" alt="cantina-logo" width={150} />
                  <span className="text-lg font-semibold">
                    <span className="opacity-60">MAX ROI: </span>
                    <span className="text-primary">15x</span>
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/ash-swap-logo.png"
                    alt="ash-swap-logo"
                    width={150}
                  />
                  <span className="text-lg font-semibold opacity-60">
                    unreleased
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/knights-of-cathena-logo.png"
                    alt="knights-of-cathena-logo"
                    width={150}
                  />
                  <span className="text-lg font-semibold opacity-60">
                    unreleased
                  </span>
                </div>
              </div>

              <div className="my-16 text-center" id="partners">
                <h2 className="text-5xl font-semibold text-white">
                  Our Partners
                </h2>
              </div>

              <p className="text-xl text-custom">
                We are also proud collaborators with Danilo Scarlucci’s
                UAE-based{" "}
                <strong className="text-primary">Morningstar Ventures</strong>,
                highly reputable VC firm and one of Elrond’s largest project
                incubators.
              </p>

              <p className="mt-4 text-xl text-custom">
                As of late 2022, D1fferent Capital also oficially partners with
                German giant{" "}
                <strong className="text-primary">Istari Vision</strong>, 3rd
                leading staking agency with over $30M in assets under management
                and very important project incubator in the Elrond ecosystem.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-10 md:gap-10">
                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/morning-star-logo.png"
                    alt="morningstar-logo"
                    className="w-60"
                  />
                  <span className="text-lg font-semibold">
                    Morningstar Ventures
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center text-white">
                  <img
                    src="/istari-vision-logo.png"
                    alt="istari-logo"
                    className="w-60"
                  />
                  <span className="text-lg font-semibold">Istari Vision</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-separator mt-10 pt-14 md:mt-20 md:pt-20"
            id="vision"
          >
            <div className="container mx-auto  px-4 ">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-semibold text-white">
                  Our vision
                </h2>
              </div>

              <div className="text-xl">
                <p className="text-custom">
                  Our aim going forward is to continue supporting the Elrond
                  ecosystem, as well as expanding our operations and deploying
                  capital to disruptive projects across all the Web3 space.{" "}
                </p>

                <p className="mt-4 text-custom">
                  Our plan of expansion consists of{" "}
                  <strong className="text-primary">building a community</strong>{" "}
                  of high-level, enthusiastic and educated investors in order to
                  <strong className="text-primary">
                    {" "}
                    decentralize our investment fund
                  </strong>{" "}
                  and offer any project that we support moving forward, a group
                  of smart and supportive individuals that will back - and
                  contribute to the project, in addition to our expertise and of
                  course, monetary stimulus.
                </p>
              </div>

              <p className="mt-4 text-xl text-custom">
                This creates a{" "}
                <strong className="text-primary">
                  mutually beneficial relationship
                </strong>{" "}
                between the community and D1fferent Capital as an investment
                fund:
              </p>

              <div className="mx-auto mt-10 max-w-5xl">
                <div className="flex flex-col items-center justify-center md:flex-row">
                  <img className="w-52" src="/community.png" alt="Icon" />

                  <p className="text-xl text-custom">
                    it allows us to leverage the power of having a strong,
                    united community on our side in addition to our well
                    developed business network.
                  </p>
                </div>

                <div className="mt-4 flex flex-col items-center justify-center md:mt-0 md:flex-row-reverse">
                  <img className="w-52" src="/private.png" alt="Icon" />

                  <p className="text-xl text-custom">
                    it allows an individual investor to access the private
                    rounds of some of the most in-demand projects, otherwise
                    inaccessible to him.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-separator mt-10 pt-14 md:mt-20 md:pt-20"
            id="proposal"
          >
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-semibold text-white">
                  Our proposal
                </h2>
              </div>

              <p className="text-center text-xl text-custom">
                In order to make this ambitious plan work, we are proposing an
                innovative,{" "}
                <strong className="text-primary">hybrid architecture</strong>:
              </p>

              <div className="grid gap-10 text-center md:grid-cols-2">
                <div className="flex flex-col items-center">
                  <img src="/transparent.svg" alt="Icon" />
                  <h3 className="text-2xl font-semibold text-white">
                    The Allocation
                  </h3>
                  <p className="mt-4 text-xl text-custom">
                    We propose a standard $1000 allocation to every project for
                    each participating investor. This allocation size is well
                    above the industry standard proposed by some of the largest
                    Launchpads in the Web3 space.
                  </p>
                  <p className="mt-4 text-base text-custom opacity-60">
                    *note that the launchpad allocations are for public rounds,
                    which are always higher than private round prices.*
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src="/secure.svg" alt="Icon" />
                  <h3 className="text-2xl font-semibold text-white">
                    Consensus
                  </h3>
                  <p className="mt-4 text-xl text-custom">
                    <strong className="text-primary">
                      We pledge to negotiate
                    </strong>{" "}
                    the allocation sizes with every project in order to achieve{" "}
                    <strong className="text-primary">the promised $1000</strong>{" "}
                    per investor
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    Transparency
                  </h3>
                  <p className="mt-4 text-xl text-custom">
                    We pledge{" "}
                    <strong className="text-primary">full transparency</strong>{" "}
                    of our operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-separator mt-10 pt-14 md:mt-20 md:pt-20"
            id="how-it-works"
          >
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-semibold text-white">
                  How it works
                </h2>
              </div>

              <div className="grid items-center justify-center gap-10 lg:grid-cols-2">
                <p className="text-xl text-custom">
                  We plan to offer{" "}
                  <strong className="text-primary">50 access tickets</strong>{" "}
                  for the community investors in the form of NFTs, which start
                  at a price of $10,000. That translates to a $50,000 allocation
                  for the community for each project, an allocation size which
                  we are 100% confident we can secure. We will create the
                  infrastructure on our website to{" "}
                  <strong className="text-primary">automate</strong> the{" "}
                  <strong className="text-primary">contribution</strong> and
                  <strong className="text-primary"> token</strong> distribution
                  system through smart contracts,{" "}
                  <strong className="text-primary">audited</strong> and
                  <strong className="text-primary"> verifiable</strong> by
                  anyone wishing to do so.
                </p>

                <div className="flex justify-center">
                  <img
                    className="img-fluid"
                    src="/how-it-works-one.png"
                    alt="Icon"
                  />
                </div>
              </div>

              <div className="mt-10 grid items-center justify-center gap-4 lg:grid-cols-2 lg:gap-10">
                <p className="order-2 flex justify-center text-xl text-custom lg:order-1">
                  The price of the Access Tickets will gradually rise as we
                  approach the completion of the fundraising. Come back here
                  soon in order to find a fully detailed price breakdown !
                </p>

                <p className="ld:order-2 order-1 text-xl text-custom">
                  Every member of the community has got{" "}
                  <strong className="text-primary">the right to choose </strong>
                  whether or not he opts{" "}
                  <strong className="text-primary">to invest</strong> in a
                  certain project, there being no form of penalty for passing on
                  an investment. The money raised through the sale will be used
                  to benefit the entire organization and will be directed toward
                  marketing, events and operational expenses. In addition, part
                  of the raised capital will be directed toward an “insurance
                  fund”, set up for the very unlikely case that a project
                  doesn’t deliver the promised tokens. In that unlikely case,
                  D1fferent Capital takes full{" "}
                  <strong className="text-primary">responsibility</strong>.
                </p>
              </div>
            </div>
          </div>

          <div
            className="section-separator mt-10 pt-14 md:mt-20 md:pt-20"
            id="escrow"
          >
            <div className="container mx-auto  px-4">
              <div className="mb-16 text-center">
                <h2 className="text-5xl font-semibold text-white">
                  D1fferent Capital as middleman / escrow service
                </h2>
              </div>
              <p className="text-xl text-custom">
                Subsequently, we will act as an{" "}
                <strong className="text-primary">escrow agent</strong> for
                projects with a high minimum ticket size (for example, a project
                that requires a minimum investment of $25,000) where a single or
                a small number of individuals are{" "}
                <strong className="text-primary">
                  unable to financially partake
                </strong>
                . These are, of course, investments that D1fferent Capital{" "}
                <strong className="text-primary">does not</strong> already
                participate in. On our official Telegram channel, any member is
                encouraged to <strong className="text-primary">propose</strong>{" "}
                such <strong className="text-primary">investment ideas</strong>{" "}
                to our community, and we pledge to{" "}
                <strong className="text-primary">mediate</strong> the
                conversation between our members. In the cases where there is
                enough interest and the proposed amount of money is raised, we
                will generate the{" "}
                <strong className="text-primary">investment pool</strong> and
                act as escrow and{" "}
                <strong className="text-primary">trusted middleman</strong>{" "}
                between the collective and said project. This will help our
                members participate in the private funding rounds of their
                desired projects without any monetary limitation and allow them
                to acquire the tokens at the{" "}
                <strong className="text-primary">best possible prices</strong>.
              </p>
              <p className="mt-4 text-xl text-custom">
                We do not impose any strict guidelines for this service,
                therefore D1fferent Capital will cooperate closely with the
                community in order to deliver the best service, regardless of
                the particularities of each individual investment.
              </p>

              <p className="mt-4 text-xl text-custom">
                As a further incentive, as we are going to fully dedicate our
                time and resources to grow the organization, we also expect the
                value of the access tickets to grow proportionally, as they will
                be permisionlessly tradable.
              </p>

              <p className="mt-4 text-xl font-semibold text-white">
                Disclaimer:
              </p>
              <p className="mt-1 text-xl text-custom">
                D1fferent Capital reserves its right to delay token
                distributions to the community members on the request of any
                collaborating project. This lines up with the professionalism
                and business ethic of D1fferent Capital and preserves its status
                of being a reliable strategic partner to every project.
              </p>
            </div>
          </div>

          <div className="pt-14">
            <footer>
              <div className="container mx-auto px-4 ">
                <div className="text-center">
                  <h4 className="text-3xl font-semibold text-white">
                    Get in touch with us
                  </h4>

                  <div className="mx-auto flex items-center justify-center gap-4 py-8">
                    <a
                      href="https://twitter.com/D1fferentCptl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        width="56"
                        src="/twitter.svg"
                        alt="Social Icon"
                        className="img-fluid"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/d1fferent.capital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        width="56"
                        src="/instagram.svg"
                        alt="Social Icon"
                        className="img-fluid"
                      />
                    </a>
                    <a
                      href="https://t.me/d1fferentdc50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        width="56"
                        src="/telegram.svg"
                        alt="Social Icon"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <p className="text-xl text-custom">
                    Or email us at{" "}
                    <a href="mailto:mailto:office@d1fferent.capital">
                      office@d1fferent.capital
                    </a>
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <div className="bg-footer p-6">
            <div className="text-center">
              <p className="inline-block px-2 text-xl text-custom">
                © 2022, D1fferent Capital
              </p>
              <a
                className="px-2 text-xl text-custom hover:underline"
                href="https://d1fferent.capital/cookie-policy.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Cookie Policy{" "}
              </a>
              <a
                className="px-2 text-xl text-custom hover:underline"
                href="https://d1fferent.capital/terms-conditions.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms and Conditions
              </a>
              <a
                className="px-2 text-xl text-custom hover:underline"
                href="https://d1fferent.capital/privacy-policy.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;