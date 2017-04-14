import React, {Component} from 'react';
import s from 'components/styles/index.scss';
import {Link} from 'react-router';

export default class Training extends Component {
  render() {
    return (
      <div className={s.container + ' ' + s.training}>
        <h1 className={s.title}>Domestic Violence Response Training</h1>
        <p className={s.lead}>Learning the steps to approach victims efficiently and effectively</p>
        <hr></hr>
        <div id="introduction">
        	<h2>What is <span className={s.purple}>domestic violence</span>?</h2>
        	<div className={s.indent}>
        		<p><b>do∙mes∙tic vi∙o∙lence</b></p>
        		<p><i>noun</i></p>
        		<p>willful intimidation, physical assault, battery, sexual assault, and/or other abusive behavior as part of a systematic pattern of power and control perpetrated by one intimate partner against another</p>
        	</div>
        	<p>It is estimated that 1 in 3 women and 1 in 4 men will suffer some type of physical, sexual, or emotional abuse by an intimate partner during their lifetime. As a first responder, you will encounter these individuals often, and in many cases, you may be the first with an opportunity to address the problem. Therefore, it is important that you know how to identify victims and respond accordingly.</p>
        	<p>SafeSteps is a training tool designed specifically for service providers in lines of work that interact with victims of domestic violence frequently. The program is broken down into five major components based in the following acronym:</p>
        	<div className={s.indent}>
        		<p><span className={s.purple}>L</span> - Look for warning signs</p>
        		<p><span className={s.purple}>E</span> - Empathize</p>
        		<p><span className={s.purple}>A</span> - Ask</p>
        		<p><span className={s.purple}>S</span> - Share resources</p>
        		<p><span className={s.purple}>T</span> - Thorough documentation</p>
        	</div>
        	<p>As you move through this training, learn to ask yourself, “What is the L.E.A.S.T. I can do?”. With in-depth explanations for each step and an opportunity to practice responding  in a variety of scenarios, SafeSteps will help you become efficient and effective in your interactions with victims of domestic violence.</p>
        </div>
        <hr></hr>
        <div id="look">
        	<h2><span className={s.purple}>L</span>ook for warning signs</h2>
        	<p>Knowing how to recognize a victim of intimate partner violence is the first step in addressing the situation effectively. The signs can come in a number of forms, including obvious physical injury due to trauma, emotional or behavioral patterns, or chronic physical symptoms. You may notice a certain distribution of injuries, or unusual behavior by someone’s partner. No two cases of domestic violence are the same, but you will notice many of  the same warning signs in each instance. It is important to know what those signs are, and to make sure you are observing individuals carefully so that you do not miss any red flags.</p>
        	<div className={s.row}>
        		<div className={s.signs + ' ' + s.row + ' ' + s.six + ' ' + s.columns}>
        			<p><b>Emotional & Behavioral:</b></p>
        			<ul>
        				<li>Agitation, anxiety and chronic apprehension</li>
        				<li>Constant state of alertness that makes it difficult for them to relax or sleep</li>
        				<li>A sense of hopelessness, helplessness or despair because the victim believes they will never escape the control of their abuser</li>
        				<li>Fear that one cannot protect oneself or one’s children. This person will turn down the assistance offered by relatives, friends or professionals.</li>
        				<li>Feeling paralyzed by fear to make decisions or protect oneself</li>
        				<li>A belief that one deserves the abuse</li>
        				<li>A belief that one is responsible for the abuse</li>
        				<li>Flashbacks, recurrent thoughts and memories of the violence and nightmares of the violence</li>
        				<li>Emotional reactions to reminders of domestic violence</li>
        				<li>Substance abuse </li>
        				<li>Poor eye contact</li>
        				<li>Crying </li>
        			</ul>

        			<p><b>Partner:</b></p>
        			<ul>
        				<li>Overly controlling</li>
        				<li>Tries to answer all questions</li>
        				<li>Won’t leave patient/victim alone or won’t leave the room when asked</li>
        				<li>Calls you names, insults you or puts you down</li>
        				<li>Prevents you from going to work or school</li>
        				<li>Stops you from seeing family members or friends</li>
        				<li>Tries to control how you spend money, where you go or what you wear</li>
        				<li>Acts jealous or possessive or constantly accuses you of being unfaithful</li>
        				<li>Gets angry when drinking alcohol or using drugs</li>
        				<li>Threatens you with violence or a weapon</li>
        				<li>Hits, kicks, shoves, slaps, chokes or otherwise hurts you, your children or your pets</li>
        				<li>Forces you to have sex or engage in sexual acts against your will</li>
        				<li>Blames you for his or her violent behavior or tells you that you deserve it</li>
        			</ul>
        		</div>
        		<div className={s.signs + ' ' + s.row + ' ' + s.six + ' ' + s.columns}>
        			<p><b>Non-injury physical: </b></p>
        			<ul>
        				<li>Headaches</li>
        				<li>Asthma or choking sensations </li>
        				<li>Gastrointestinal symptoms</li>
        				<li>Chronic pain</li>
        				<li>Restless sleep or inability to sleep</li>
        				<li>Genital soreness</li>
        				<li>Pelvic pain</li>
        				<li>Back pain</li>
        				<li>Numbness and tingling</li>
        				<li>Urinary tract infection </li>
        			</ul>

        			<p><b>Physical injury:</b></p>
        			<ul>
        				<li>Eardrum rupture</li>
        				<li>Rectal or genital injury</li>
        				<li>Facial scrapes, bruises, cuts, or fractures</li>
        				<li>Neck scrapes or bruises</li>
        				<li>Abdominal cuts or bruises</li>
        				<li>Tooth loose or broken</li>
        				<li>Head scrapes or bruises</li>
        				<li>Body scrapes or bruises</li>
        				<li>Arm scrapes or bruises</li>
        				<li>Various stages of healing</li>
        				<li>Injury does not match the story </li>
        			</ul>

        			<p><b>Distribution:</b></p>
        			<ul>
	        			<li>Centrally located injuries</li>
	        			<li>Injury distribution is in a bathing-suit pattern, primarily involving the breasts, body, buttocks, and genitals-- these areas are usually covered by clothing, concealing obvious signs of injury.</li>
	        			<li>Another central location is the head and neck, which is the site of up to 50% of abusive injuries.</li>
	        			<li>Characteristic domestic violence injuries: Cigarette burns, Bite marks, Rope burns, Bruises</li>
	        			<li>Welts with the outline of a recognizable weapon (such as a belt buckle) </li>
	        			<li>Bilateral injuries: Injuries involving both sides of the body, usually the arms and legs</li>
	        			<li>Defensive posture injuries: </li>
	        			<li>These injuries are to the parts of the body used by the woman to fend off an attack:</li>
	        			<li>The small finger side of the forearm or the palms when used to block blows to the head and chest</li>
	        			<li>The bottoms of the feet when used to kick away an assailant</li>
	        			<li>The back, legs, buttocks, and back of the head when the woman is crouched on the floor</li>
	        			<li>Injuries inconsistent with the explanation given:</li>
	        			<li>The injury type or severity does not fit with the reported cause.</li>
	        			<li>The mechanism of injury reported would not produce the signs of injury found on physical examination.</li>
	        			<li>Injuries in various stages of healing:</li>
	        			<li>Signs of both recent and old injuries may represent a history of ongoing abuse.</li>
	        			<li>Delay in seeking medical attention for injuries may indicate either the victims reluctance to involve doctors or his or her inability to leave home to seek needed care.</li>
	        		</ul>
        		</div>
        	</div>
        </div>
        <hr></hr>
        <div id="share">
        	<h2><span className={s.purple}>S</span>hare the resources</h2>
        	<p>Once you have determined that someone is a  victim of domestic violence, your next step is to provide them with the support and information they need to move forward.</p>
        	<ul>
        		<li>Have basic familiarity with your state’s domestic violence shelters and support centers</li>
        		<li>Memorize the national and/or local hotline numbers</li>
        		<li>Keep in mind that in many cases you may not be able to send home paper copies with resources listed, since an abusive partner may monitor the victim’s activities closely. Instead be prepared to use alternative methods such as a disguised email, or share only the most necessary resources like the hotline number and the name of the local shelter or website that can be easily remembered</li>
        		<li>If you do not know the resources very well, it is important that you know of someone who does. Be able to refer the victim to someone who can help them (if it is not you) before you are out of contact with him or her</li>
        		<li>Do not pressure or force a victim to follow any particular course of action-- in other words, do not tell them what to do. Recommend, gently encourage, and provide all of the options but remember that these individuals are in situations where they feel powerless. Show support for their decisions and reinforce that they are in control of the situation</li>
        		<li>Talk through and create a safety plan with the victim.</li>
        	</ul>
        	<p>National Domestic Violence Hotline: 1−800−799−7233</p>
        </div>
        <hr></hr>
        <div id="thorough">
        	<h2><span className={s.purple}>T</span>horough documentation</h2>
        	<p>Documenting each encounter with a potential victim of domestic violence can prove essential, both as a record of incidents to spot an ongoing problem or as evidence in cases that go to court. For this reason, it is important that you give careful attention to detail in your reports. In order for your documentation to be counted as objective, third-party evidence in legal proceedings, there are a few guidelines that you must follow:</p>
        	<ul>
        		<li>Be as accurate and comprehensive as possible when documenting any injuries or information</li>
        		<li><b>Write legibly</b> so that reports are easy to read</li>
        		<li>When possible, take photographs to include in your documentation as proof of injuries that may fade or disappear by the time a case goes to court</li>
        		<li>Include specific statements from the victim about the abuse and be sure to identify the victim as the speaker using quotes-- this type of commentary is given a lot of credibility in the legal system because it occurs so close in time to the actual instance of domestic violence</li>
        		<li>Describe the victim’s demeanor, even if it does not seem consistent with the rest of the evidence </li>
        		<li>Record as many details as you can about the <b>who, what, where, when, and how</b> of both the incident and your encounter with the individual</li>
        		<li>Use clear, concise, objective language</li>
        		<li>Avoid documenting your own conclusions (domestic violence, rape, assault and battery) as those judgments are made by the court. Simply state what you see and hear</li>
        	</ul>
        	<p>Even if your documentation is not used in court, it is important that you are thorough in your record keeping. The information that you take down may be the only proof that an incident occurred, and you never know when that evidence may be needed. Thorough documentation also ensures that you are paying attention to the victim and being diligent in your response to the situation.</p>
        </div>
        <hr></hr>
        <div id="conclusion">
        	<h2>Conclusion</h2>
        	<p>In this line of work where time is a limited resource, thinking and acting quickly under pressure are essential skills. As much as you want to take ample time to assist a victim in crisis, that is not always feasible. Familiarity with these steps can ease the burden of a ticking clock, since a more comprehensive knowledge accelerates your ability to recognize and respond. With increased knowledge comes increased efficiency, allowing you to invest more in each individual.</p>
			<p>The easiest way to commit the response steps to memory is with the acronym, and remembering to ask “What is the <b>L.E.A.S.T.</b> I can do?”</p>
        	<div className={s.indent}>
        		<p><b>To recap:</b></p>
        		<p><span className={s.purple}>L</span> - Look for warning signs</p>
        		<p><span className={s.purple}>E</span> - Empathize</p>
        		<p><span className={s.purple}>A</span> - Ask</p>
        		<p><span className={s.purple}>S</span> - Share resources</p>
        		<p><span className={s.purple}>T</span> - Thorough documentation</p>
        	</div>
        	<p>Above all else, be intentional about responding with compassion, patience, and care. These victims come from settings where they are made to feel helpless-- an empowering exchange could be the catalyst that helps them out of an abusive situation.</p>
        </div>
        <div id="links">
        	<p>You have reached the end of the SafeSteps training portion. Next, explore the scenarios to apply your knowledge and practice responding.</p>
        	<div className={s['flex-col']}>
            <Link to={'/'} className={s.button + ' ' + s.primary}>Back Home</Link>
        		<Link to={'/safetyplan'} className={s.button + ' ' + s.primary}>Create Safety Plans</Link>
        		<Link to={'/scenariolist'} className={s.button + ' ' + s.primary}>Practice Scenarios</Link>
        	</div>
        </div>
      </div>
    );
  }
}
