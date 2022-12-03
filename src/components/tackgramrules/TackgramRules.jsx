import React from "react";
import MobileFooter from "../footer/MobileFooter";
import PageImageBG from "../PageImageBG";

export default function TackgramRules() {
  return (
    <div>
      <section id="page2" class="">
        <div className="container">
          {/* <PageImageBG /> */}
          <div className="about-topic">
            <h2>Tackgram Rules</h2>
          </div>
          <div className="about-sub-topic" >

            <p><span>

              Tackgram's purpose is to serve the public conversation. Violence,
              harassment and other similar types of behavior discourage people
              from expressing themselves, and ultimately diminish the value of
              global public conversation. Our rules are to ensure all people can
              participate in the public conversation freely and safely.
            </span>
            </p>
          </div>
          <div className="about-sub-topic">
            <h4>Safety</h4>
            <p>
              <span>Violence:</span> You may not threaten violence against an individual or a
              group of people. We also prohibit the glorification of violence.
            </p>

            <p>
              <span>Terrorism/violent extremism:</span> You may not threaten or promote
              terrorism or violent extremism
            </p>

            <p>
             <span> Child sexual exploitation:</span> We have zero tolerance for child sexual
              exploitation on Tackgram.
            </p>

            <p>
             <span>Abuse/harassment:</span>  You may not engage in the targeted harassment of
              someone or incite other people to do so. This includes wishing or
              hoping that someone experiences physical harm.
            </p>
            <p>
              <span>Hateful conduct:</span> You may not promote violence against, threaten,
              or harass other people on the basis of race, ethnicity, national
              origin, caste, sexual orientation, gender, gender identity,
              religious affiliation, age, disability, or serious disease.
            </p>
            <p>
              <span>Suicide or self-harm:</span> You may not promote or encourage suicide or
              self-harm.
            </p>
            <p>
              <span>Sensitive media, including graphic violence and adult content:</span> You
              may not post media that is excessively gory or share violent or
              adult content in profile or header images. Media depicting sexual
              violence and/or assault is also not permitted.
            </p>
            <p>
              <span>Illegal or certain regulated goods or services:</span> You may not use
              our service for any unlawful purpose or in furtherance of illegal
              activities. This includes selling, buying, or facilitating
              transactions in illegal goods or services, as well as certain
              types of regulated goods or services.
            </p>
          </div>

          <div className="about-sub-topic">
            <h4>Privacy</h4>
            <p>
              <span>Private information:</span> You may not publish or post other people's
              private information (such as home phone number and address)
              without their authorization and permission. We also prohibit
              threatening to expose private information or incentivizing others
              to do so.
            </p>
            <p>
              <span>Non-consensual nudity:</span> You may not post or share intimate photos
              or videos of someone that were produced or distributed without
              their consent.
            </p>
          </div>

          <div className="about-sub-topic">
            <h4>Authenticity </h4>
            <p>
              <span>Platform manipulation and spam:</span> You may not use Tackgram’s
              services in a manner intended to artificially amplify or suppress
              information or engage in behavior that manipulates or disrupts
              people’s experience on Tackgram.
            </p>
            <p>
             <span>Civic Integrity:</span>  You may not use Tackgram’s services for the
              purpose of manipulating or interfering in elections or other civic
              processes. This includes posting or sharing content that may
              suppress participation or mislead people about when, where, or how
              to participate in a civic process.
            </p>

            <p>
              <span>Impersonation:</span> You may not impersonate individuals, groups, or
              organizations in a manner that is intended to or does mislead,
              confuse, or deceive others.
            </p>

            <p>
              <span>Synthetic and manipulated media:</span> You may not deceptively share
              synthetic or manipulated media that are likely to cause harm.
            </p>

            <p>
              <span>Copyright and trademark:</span> You may not violate others’ intellectual
              property rights, including copyright and trademark.
            </p>
            <p>
              <span>Third-party advertising in video content:</span> You may not submit,
              post, or display any video content on or through our services that
              includes third-party advertising, such as pre-roll video ads or
              sponsorship graphics, without our prior consent.
            </p>
          </div>

          <div className="about-sub-topic">
            <h4>Entire Agreement</h4>
            <p>
              These Rules are the entire and exclusive agreement between
              Tackgram, Inc and you regarding the Services (excluding any
              services for which you have a separate agreement with Tackgram
              that is explicitly in addition or in place of these Rules), and
              these Rules supersede and replace any prior agreements between
              Tackgram and you regarding the Services. No person or company will
              be third party beneficiaries to the Rules.
            </p>

            <p>
            We may revise these
              Rules from time to time. If the revision, in our sole discretion,
              is material we will notify you via an @Tackgram update or e-mail
              to the email associated with your account. By continuing to access
              or use the Services after those revisions become effective, you
              agree to be bound by the revised Rules. If you have any questions
              about these Rules, please contact us.
            </p>
          </div>
        </div>
      </section>
      <MobileFooter />

    </div>
  );
}
