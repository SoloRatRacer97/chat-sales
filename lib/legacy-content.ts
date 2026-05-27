export const legacySections = {
  "home": String.raw`<header class="hero">
  <div class="hero-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill">
        <div class="live-dot"></div>
        Built for shops where one missed lead is real money
      </div>
      <h1>More booked jobs. More closed cases. <span class="accent">Every single week.</span></h1>
      <p class="hero-sub">ChatSales™ texts your leads back the second they come in, from a real iPhone number, like a real person. It asks the right questions, sorts the hot ones from the cold ones and drops them on your team while your competition is still typing their follow-up email.</p>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See How It Works →</a>
      </div>
    </div>
    <div class="hero-visual">
      <img src="/img/home-hero-chat-sales.png" alt="ChatSales iMessage conversation mockup with lead scoring and booked dispatch details">
    </div>
  </div>
</header>

<section class="video-section" id="see-it">
  <div class="container">
    <div class="video-copy">
      <div class="eyebrow">See it in 90 seconds</div>
      <h2>Watch ChatSales™ <span class="accent">close a lead in real time.</span></h2>
      <p>A real inbound lead. A real iPhone. A real conversation that ends with a booked appointment, before the homeowner has time to call the next contractor on the list.</p>
      <div class="video-stats">
        <div>
          <div class="video-stat-num">90s</div>
          <div class="video-stat-label">RUNTIME</div>
        </div>
        <div>
          <div class="video-stat-num">2 min</div>
          <div class="video-stat-label">AVG FIRST REPLY</div>
        </div>
        <div>
          <div class="video-stat-num">7/10</div>
          <div class="video-stat-label">QUALIFIED CONVOS BOOK</div>
        </div>
      </div>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Live Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See the Full Process →</a>
      </div>
    </div>

    <a href="/#book-demo" class="video-frame" aria-label="Watch the 90-second demo (will open booking page until video is wired up)">
      <div class="video-frame-label">LIVE WALKTHROUGH</div>
      <div class="video-frame-time">1:34</div>
      <div class="video-play" aria-hidden="true"></div>
    </a>
  </div>
</section>

<section class="tool-section" id="home-calc">
  <div class="container">
    <div class="tool-banner">
      <div class="tool-eyebrow">Money You're Leaving on the Table</div>
      <h2 class="tool-heading">See what your shop <span class="accent">would win back every month.</span></h2>
      <p class="tool-sub">Pick your trade. Tweak the numbers if yours run different. The number on the right is what the other guy is collecting right now, money you'd pull back the day ChatSales™ goes live.</p>
    </div>

    <div class="tool-tabs" id="calc-tabs">
      <button class="tool-tab active" data-preset="plumbing">Plumbing</button>
      <button class="tool-tab" data-preset="electrical">Electricians</button>
      <button class="tool-tab" data-preset="pest">Pest Control</button>
      <button class="tool-tab" data-preset="hvac">HVAC</button>
    </div>

    <div class="tool-card">
      <div class="tool-inputs-row">
        <div class="tool-input">
          <label for="calc-job" title="Average revenue per closed job">Average job ticket</label>
          <div class="tool-money-input">
            <span>$</span><input type="number" id="calc-job" value="339" min="50" max="10000">
          </div>
        </div>
        <div class="tool-input">
          <label for="calc-inquiries" title="Calls + forms that come in after hours per month">After-hours leads / month</label>
          <input type="number" id="calc-inquiries" value="65" min="1" max="500">
        </div>
        <div class="tool-input">
          <label for="calc-missed" title="How many you don't get back to fast enough">% you miss</label>
          <div class="tool-pct-input">
            <input type="number" id="calc-missed" value="35" min="0" max="100"><span>%</span>
          </div>
        </div>
        <div class="tool-input">
          <label for="calc-book" title="Of the ones you do answer, the % that turn into booked jobs">% that become jobs</label>
          <div class="tool-pct-input">
            <input type="number" id="calc-book" value="65" min="0" max="100"><span>%</span>
          </div>
        </div>
      </div>

      <div class="tool-result">
        <div class="tool-result-card">
          <div class="tool-result-label">Money You'd Pull Back / Month</div>
          <div class="tool-result-big" id="calc-big">$5,016</div>
          <div class="tool-result-sub" id="calc-sub">based on the numbers above</div>
        </div>
        <div class="tool-bars">
          <div>
            <div class="tool-bar-label">
              <span>Jobs you'd win back each month</span>
              <span class="tool-bar-val" id="calc-jobs">15</span>
            </div>
            <div class="tool-bar-track"><div class="tool-bar-fill green" id="calc-bar-jobs" style="width:30%"></div></div>
          </div>
          <div>
            <div class="tool-bar-label">
              <span>Money you'd pull back this year</span>
              <span class="tool-bar-val" id="calc-annual">$60,192</span>
            </div>
            <div class="tool-bar-track"><div class="tool-bar-fill amber" id="calc-bar-annual" style="width:65%"></div></div>
          </div>
          <div>
            <div class="tool-bar-label">
              <span>Money walking out the door every day</span>
              <span class="tool-bar-val" id="calc-daily">$165</span>
            </div>
            <div class="tool-bar-track"><div class="tool-bar-fill red" id="calc-bar-daily" style="width:18%"></div></div>
          </div>
          <div class="tool-net">
            <span>This is what the other guy is getting</span>
            <span class="tool-net-val" id="calc-net">$5,016 / mo</span>
          </div>
        </div>
      </div>

      <p class="tool-disclaimer">Defaults are conservative national numbers. Change any box above to match your shop. Math: calls/forms × percent you miss × percent that become jobs × your average ticket.</p>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">We pulled in $11,400 in recovered revenue our first month. ChatSales™ paid for the entire year by week 6.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Tom Calderon</span>
          <span class="testimonial-role">Owner · Calderon Electrical · Tucson, AZ</span>
        </div>
        <span class="testimonial-result">+$11,400 month 1</span>
      </div>
    </div>
  </div>
</section>

<section class="tool-section" id="response-benchmark" style="background:var(--white)">
  <div class="container">
    <div class="tool-banner reply-time-banner">
      <div class="tool-eyebrow">How Fast Are You?</div>
      <h2 class="tool-heading">See how your reply time <span class="accent">stacks up against the shops winning your jobs.</span></h2>
      <p class="tool-sub">Pick your industry. Drag the marker to your usual reply time. We'll show you where you sit, what the fast shops are doing and how many more jobs you'd book if you matched them.</p>
    </div>

    <div class="tool-card" style="background:var(--paper);border-color:transparent">
      <div class="tool-tabs" id="bench-tabs">
        <button class="tool-tab active" data-bench="home-services">Home Services</button>
        <button class="tool-tab" data-bench="legal">Legal</button>
        <button class="tool-tab" data-bench="dental">Dental</button>
        <button class="tool-tab" data-bench="senior">Senior Living</button>
      </div>

      <div class="bench-controls-row">
        <label for="bench-input">How long does it take you to reply to a new lead?</label>
        <div class="bench-input-group">
          <input type="number" id="bench-input" value="3" min="1" max="999">
          <select id="bench-unit">
            <option value="1">minutes</option>
            <option value="60" selected>hours</option>
          </select>
        </div>
      </div>

      <div class="bench-scale">
        <div class="bench-bar">
          <div class="bench-zone z-top"    style="left:0;width:20.2%"><span>Fast shops</span></div>
          <div class="bench-zone z-avg"    style="left:20.2%;width:48.7%"><span>Most shops</span></div>
          <div class="bench-zone z-bottom" style="left:68.9%;width:31.1%"><span>Losing jobs</span></div>
        </div>
        <div class="bench-marker" id="bench-marker" style="left:68.9%">
          <div class="bench-marker-pin"></div>
        </div>
        <div class="bench-axis">
          <span style="left:0%">5 min</span>
          <span style="left:20.2%">15 min</span>
          <span style="left:51.4%">1 hr</span>
          <span style="left:68.9%">4 hr</span>
          <span style="left:91.3%">24 hr</span>
          <span style="left:100%">48+ hr</span>
        </div>
        <div class="bench-hint">Drag the marker or click anywhere on the bar, to see how your numbers shift</div>
      </div>

      <div class="bench-readout">
        <div>
          <div class="bench-stat-label">How you stack up</div>
          <div class="bench-stat-val" id="bench-percentile">Slower than most</div>
        </div>
        <div>
          <div class="bench-stat-label">What the fastest shops hit</div>
          <div class="bench-stat-val" id="bench-top">Under 5 min</div>
        </div>
        <div>
          <div class="bench-stat-label">Extra jobs you'd book if you matched them</div>
          <div class="bench-stat-val" id="bench-lift">+47% more</div>
        </div>
      </div>

      <div class="bench-verdict" id="bench-verdict">
        This is the leak. By the time you reply, the lead has already heard from somebody faster. The shops winning your jobs reply in under 5 minutes and that's the fix.
      </div>
    </div>
  </div>
</section>

<section class="testimonial-strip" style="background:var(--white);padding-top:0">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">We were missing 30% of after-hours calls. After ChatSales™, we book most of them as same-day or next-morning. That's two extra HVAC techs' worth of revenue, with zero new hires.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Mike Trevino</span>
          <span class="testimonial-role">Owner · Trevino Heating &amp; Air · Phoenix, AZ</span>
        </div>
        <span class="testimonial-result">2× tech capacity, 0 new hires</span>
      </div>
    </div>

    <div class="mid-cta">
      <div class="mid-cta-text">
        <div class="mid-cta-title">Ready to see what you'd win back?</div>
        <div class="mid-cta-sub">15-minute walkthrough with your numbers, your industry, real examples.</div>
      </div>
      <div class="btn-row">
        <a href="/#book-demo" class="btn-white">Book a Demo</a>
        <a href="/#see-how-it-works" class="btn-ghost">See How It Works</a>
      </div>
    </div>
  </div>
</section>

<div class="trust-bar">
  <div class="trust-inner">
    <div class="trust-item"><div class="trust-dot"></div>Real blue-bubble iMessage</div>
    <div class="trust-item"><div class="trust-dot"></div>Natural lead qualification</div>
    <div class="trust-item"><div class="trust-dot"></div>Hot / warm / cold scoring</div>
    <div class="trust-item"><div class="trust-dot"></div>CRM-ready handoff</div>
    <div class="trust-item"><div class="trust-dot"></div>Built for expensive missed leads</div>
  </div>
</div>

<section>
  <div class="container">
    <div class="eyebrow eyebrow-red">The problem</div>
    <h2>The math is simple. The team that responds first <span class="accent">wins the job</span> 78% of the time.</h2>
    <div class="split split-tight" style="margin-top:40px">
      <div>
        <p style="font-size:17px;color:var(--ink-soft);line-height:1.65">A lead fills out a form. Calls after hours. Requests a quote. Asks for a consultation. Looks at two or three providers at the same time.</p>
        <p style="font-size:17px;color:var(--ink-soft);line-height:1.65;margin-top:18px">If your business answers slowly, the market does not interpret that as neutral.</p>
      </div>
      <div>
        <p style="font-size:17px;line-height:1.65">It interprets it as:</p>
        <ul class="clean-list">
          <li>less organized</li>
          <li>less trustworthy</li>
          <li>less available</li>
          <li>less likely to help now</li>
        </ul>
        <p style="font-size:17px;line-height:1.65;margin-top:24px">That's why being fast matters. And that's why a generic chatbot doesn't cut it.</p>
      </div>
    </div>
  </div>
</section>

<section class="dark">
  <div class="container">
    <div class="eyebrow">The ChatSales™ difference</div>
    <h2>Outpace every competitor. <span class="accent">Win the leads they're still waiting on.</span></h2>
    <p class="section-intro">ChatSales™ does not just send a message. It starts a better first conversation. It reaches out through real blue-bubble iMessage, qualifies with natural language, handles common edge cases, scores the lead and gives your team the context needed to act fast.</p>
    <div class="feature-grid-4">
      <div class="feature-card">
        <div class="icon-box">💬</div>
        <h3>Real iMessage, real trust</h3>
        <p>Blue-bubble outreach from a real iPhone number. Not a generic shortcode. Not a spammy-looking SMS blast.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🧠</div>
        <h3>Conversational, not robotic</h3>
        <p>ChatSales™ matches tone and urgency so the conversation feels useful, not canned.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🎯</div>
        <h3>Smarter prioritization</h3>
        <p>Every lead is scored and summarized so your team knows who to call first.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">✓</div>
        <h3>Cleaner handoff</h3>
        <p>Better information. Better timing. Less waste between interest and action.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="eyebrow">Built for your category</div>
    <h2>Same playbook. <span class="accent">Different wins.</span></h2>
    <p class="section-intro">Your buyers don't behave like everyone else's. ChatSales™ is tuned to four industries where the first response decides the deal and the math behind a missed lead is brutal.</p>
    <div class="industries-grid">
      <a href="/industries/home-services" class="industry-card">
        <div class="icon-box">🔧</div>
        <span class="tag">HOME SERVICES</span>
        <h3>Home Services</h3>
        <p>HVAC, plumbing, electrical, pest control, roofing, restoration, remodeling, local shops where the customer hires whoever picks up first.</p>
        <span class="arrow">Explore →</span>
      </a>
      <a href="/industries/legal-intake" class="industry-card">
        <div class="icon-box">⚖️</div>
        <span class="tag">LEGAL INTAKE</span>
        <h3>Legal Intake</h3>
        <p>Personal injury, family law, criminal defense, immigration, estate planning, elder law, firms where the first call books the case.</p>
        <span class="arrow">Explore →</span>
      </a>
      <a href="/industries/dental" class="industry-card">
        <div class="icon-box">🦷</div>
        <span class="tag">DENTAL</span>
        <h3>Dental</h3>
        <p>Implants, cosmetic, Invisalign, family practices doing big-ticket work, patients want a fast, calm reply before they book.</p>
        <span class="arrow">Explore →</span>
      </a>
      <a href="/industries/senior-living" class="industry-card">
        <div class="icon-box">🏡</div>
        <span class="tag">SENIOR LIVING</span>
        <h3>Senior Living</h3>
        <p>Senior communities, elder law, hospice, adult day, families under pressure who pick the place that answers them kindly and fast.</p>
        <span class="arrow">Explore →</span>
      </a>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>More booked jobs. More closed cases. <span class="accent">Every single week.</span></h2>
  <p>ChatSales™ helps your business respond faster, qualify better and create a stronger first impression before the lead moves on.</p>
  <div class="cta-row">
    <a href="/#book-demo" class="btn btn-primary">Book a Demo</a>
    <a href="/#see-how-it-works" class="btn btn-outline-light">See How It Works →</a>
  </div>
</section>`,

  "how": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>The process, end to end</div>
      <h1>From new lead to <span class="accent">booked appointment in under 5 minutes.</span></h1>
      <p class="hero-sub">A repeatable six-step pipeline that fires the moment an inquiry lands. The lead gets a fast, human-feeling first response. Your team gets a scored, summarized opportunity ready to act on.</p>
    </div>
    <div class="hero-visual how-hero-visual">
      <img src="/img/see-how-it-works.png" alt="Three-step ChatSales workflow from captured lead to AI qualification to booked appointment">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="eyebrow">The pipeline</div>
    <h2>Six steps. <span class="accent">Under five minutes.</span></h2>
    <p class="section-intro">From the moment the inquiry lands to the moment your team has a scored, summarized opportunity ready to act on.</p>

    <div class="flow-chart">
      <div class="flow-node">
        <div class="flow-node-num">STEP 01</div>
        <div class="flow-node-icon">📥</div>
        <div class="flow-node-title">A lead comes in</div>
        <div class="flow-node-desc">Form, quote request, consultation ask or any other intake source.</div>
      </div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-node">
        <div class="flow-node-num">STEP 02</div>
        <div class="flow-node-icon">💬</div>
        <div class="flow-node-title">ChatSales™ responds immediately</div>
        <div class="flow-node-desc">Real blue-bubble iMessage from a real iPhone number. No silence, no delay.</div>
      </div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-node">
        <div class="flow-node-num">STEP 03</div>
        <div class="flow-node-icon">🗣️</div>
        <div class="flow-node-title">The conversation feels natural</div>
        <div class="flow-node-desc">Tone and urgency adjust to the situation. No robotic scripts.</div>
      </div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-node">
        <div class="flow-node-num">STEP 04</div>
        <div class="flow-node-icon">📋</div>
        <div class="flow-node-title">Key details are gathered</div>
        <div class="flow-node-desc">Service need, urgency, location, timing and readiness, captured cleanly.</div>
      </div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-node">
        <div class="flow-node-num">STEP 05</div>
        <div class="flow-node-icon">🎯</div>
        <div class="flow-node-title">The lead is scored</div>
        <div class="flow-node-desc">Hot, warm or cold, with a short conversation summary for your team.</div>
      </div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-node">
        <div class="flow-node-num">STEP 06</div>
        <div class="flow-node-icon">🤝</div>
        <div class="flow-node-title">Cleaner handoff</div>
        <div class="flow-node-desc">Your staff gets the context needed to prioritize and act fast.</div>
      </div>
    </div>

    <div class="flow-outcome">
      <div class="flow-outcome-icon">✓</div>
      <div class="flow-outcome-text"><strong>Outcome:</strong> The opportunity reaches your team with full context, while the buyer is still leaning in.</div>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">I used to lose form fills overnight. Now I wake up to a list of pre-qualified jobs scored hot, warm and cold. My team starts the day knowing exactly who to call first.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Dana Ortiz</span>
          <span class="testimonial-role">GM · RushFlow Plumbing · Austin, TX</span>
        </div>
        <span class="testimonial-result">Mornings go from chaos to clarity</span>
      </div>
    </div>

    <div class="mid-cta">
      <div class="mid-cta-text">
        <div class="mid-cta-title">Want to see this pipeline running on your leads?</div>
        <div class="mid-cta-sub">We'll plug in your actual lead sources on the demo call and show you the conversation flow that fits your industry.</div>
      </div>
      <div class="btn-row">
        <a href="/#book-demo" class="btn-white">Book a Demo</a>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--paper);padding:90px 32px" id="sim-section">
  <div class="container">
    <div class="eyebrow">Live Demo</div>
    <h2>Try it like a real customer would. <span class="accent">Ask anything.</span></h2>
    <p class="section-intro">Pick a scenario, then type whatever you want, "what city are you in?", "how's the weather?", "how much is this gonna cost?" or just describe the problem. ChatSales™ handles the chit-chat the same way it handles the qualifying questions: like a real person.</p>

    <div class="sim-instructions">
      <div class="sim-step"><div class="sim-step-num">1</div><div class="sim-step-text">Pick a scenario →</div></div>
      <div class="sim-step"><div class="sim-step-num">2</div><div class="sim-step-text">Type whatever you'd say to a real shop</div></div>
      <div class="sim-step"><div class="sim-step-num">3</div><div class="sim-step-text">Watch the convo until the lead is booked</div></div>
    </div>

    <div class="sim-wrap">
      <div class="sim-scenarios">
        <div class="sim-scenarios-label">CHOOSE A SCENARIO</div>
        <button class="sim-scenario active" data-scenario="hvac" data-greeting="Hey there! Saw you reached out about your AC. What's going on with it?">
          <div class="sim-icon">🌡️</div>
          <div><div class="sim-name">HVAC emergency</div><div class="sim-hint">Try: "My AC's dead" or "What city are you in?"</div></div>
        </button>
        <button class="sim-scenario" data-scenario="legal" data-greeting="Hi, thanks for reaching out. I want to make sure you get connected to the right person quickly. Can you tell me a bit about what's going on?">
          <div class="sim-icon">⚖️</div>
          <div><div class="sim-name">Legal consult</div><div class="sim-hint">Try: "I was in an accident" or "How much do you charge?"</div></div>
        </button>
        <button class="sim-scenario" data-scenario="dental" data-greeting="Hi! Thanks for your interest. I'd love to help you figure out the best next step. What were you hoping to learn about?">
          <div class="sim-icon">🦷</div>
          <div><div class="sim-name">Dental implant</div><div class="sim-hint">Try: "I'm scared of the dentist" or "Where are you located?"</div></div>
        </button>
        <button class="sim-scenario" data-scenario="senior" data-greeting="Hi, thank you for reaching out. I know this can feel like a lot. I'm here to help, whenever you're ready, tell me a bit about your situation.">
          <div class="sim-icon">🏡</div>
          <div><div class="sim-name">Senior living</div><div class="sim-hint">Try: "Looking for mom" or "I'm so overwhelmed"</div></div>
        </button>
      </div>

      <div>
        <div class="sim-phone">
          <div class="sim-phone-header">
            <div class="sim-avatar">CS</div>
            <div>
              <div class="sim-phone-name">ChatSales™ · (512) 555-0142</div>
              <div class="sim-phone-status">iMessage</div>
            </div>
          </div>
          <div class="sim-body" id="sim-body"><div class="sim-timestamp">Today</div></div>
          <div class="sim-input-row">
            <input type="text" id="sim-input" placeholder="Ask anything, try &quot;what city are you in?&quot;" autocomplete="off">
            <button id="sim-send" aria-label="Send">→</button>
          </div>
          <div class="sim-score-bar" id="sim-score" style="display:none">
            <span class="sim-score-label">Lead Score</span>
            <span class="sim-score-badge" id="sim-score-badge">·</span>
            <span class="sim-score-summary" id="sim-score-summary"></span>
          </div>
        </div>
      </div>
    </div>
    <p style="text-align:center;font-size:13px;color:var(--muted);margin-top:24px">A simulation, the real product runs on actual iMessage from a real iPhone number.</p>
  </div>
</section>

<section class="final-cta">
  <h2>Walk through your numbers. <span class="accent">See what you'd win.</span></h2>
  <p>Walk through your lead flow with us. In 15 minutes you'll see exactly where ChatSales™ fits and where it doesn't.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Demo</a></div>
</section>`,

  "industries": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>Industries we serve</div>
      <h1>Four industries. <span class="accent">One proven way to win more jobs.</span></h1>
      <p class="hero-sub">ChatSales™ works best where the job is worth real money, the customer is shopping more than one place and the shop that texts back first usually wins the work.</p>
    </div>
    <div class="hero-visual industries-hero-visual">
      <img src="/img/four-industries.png" alt="ChatSales workflow connecting home services, legal intake, dental and senior living to win more jobs">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="industries-grid" style="margin-top:0">
      <a href="/industries/home-services" class="industry-card">
        <div class="icon-box">🔧</div><span class="tag">HOME SERVICES</span>
        <h3>Home Services</h3>
        <p>For owners who want more booked jobs, fewer dead leads and less money wasted on ads that go nowhere.</p>
        <span class="arrow">Explore Home Services →</span>
      </a>
      <a href="/industries/legal-intake" class="industry-card">
        <div class="icon-box">⚖️</div><span class="tag">LEGAL INTAKE</span>
        <h3>Legal Intake</h3>
        <p>For firms whose leads are stressed, time-sensitive and calling three other firms while they wait on you.</p>
        <span class="arrow">Explore Legal Intake →</span>
      </a>
      <a href="/industries/dental" class="industry-card">
        <div class="icon-box">🦷</div><span class="tag">DENTAL</span>
        <h3>Dental</h3>
        <p>For practices where big-ticket inquiries need a fast, calm first reply before the patient picks a different chair.</p>
        <span class="arrow">Explore Dental →</span>
      </a>
      <a href="/industries/senior-living" class="industry-card">
        <div class="icon-box">🏡</div><span class="tag">SENIOR LIVING</span>
        <h3>Senior Living</h3>
        <p>For places that work with families under stress, where a calm, fast first answer is the reason they tour with you.</p>
        <span class="arrow">Explore Senior Living →</span>
      </a>
    </div>

    <div class="mid-cta">
      <div class="mid-cta-text">
        <div class="mid-cta-title">Not sure which playbook fits?</div>
        <div class="mid-cta-sub">We'll walk through your lead flow and tell you straight, what changes, what doesn't and whether ChatSales™ is the right move.</div>
      </div>
      <div class="btn-row">
        <a href="/#book-demo" class="btn-white">Book a 15-min Call</a>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>The same playbook. <span class="accent">Winning across four very different industries.</span></h2>
  <p>ChatSales™ is built for businesses where the cost of a missed lead is real.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Demo</a></div>
</section>`,

  "home-services": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>For Home Services</div>
      <h1>Real shop. Real reply. <span class="accent">Real fast.</span></h1>
      <p class="hero-sub">A homeowner with a dead AC or a flooded basement is comparing two or three shops. The one that texts back first, from a real local number, sounding like a real local foreman, wins the job. ChatSales™ is built so your shop is always that shop.</p>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Home Services Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See How It Works →</a>
      </div>
    </div>
    <div class="hero-visual home-services-hero-visual">
      <img src="/img/home-services.png" alt="Home services technician texting beside ChatSales service van with booked job confirmation">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="eyebrow">Why homeowners hire you</div>
    <h2>The whole game is trust. <span class="accent">ChatSales™ wins it in the first 30 seconds.</span></h2>
    <p class="section-intro">Homeowners don't see your trucks, your reviews or your license, not yet. All they see is whoever replied first and whether that first reply felt like a real shop or a robot. We make sure it feels like a real shop.</p>

    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card">
        <div class="icon-box">📍</div>
        <h3>Real local number</h3>
        <p>Texts come from a real iPhone in your area code, not a 1-800, not a shortcode. The homeowner sees a local number and trusts it.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🇺🇸</div>
        <h3>US-based, no offshore</h3>
        <p>No call center in another time zone reading a script. Real US dispatch built around your service area and your trades.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🗣️</div>
        <h3>Sounds like your shop</h3>
        <p>Scripts tuned to your shop's name, your trade, your tone. The homeowner thinks they're already talking to your dispatcher.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">⏱️</div>
        <h3>Show-up window in writing</h3>
        <p>The customer ends the chat with a real arrival window, not a vague "someone will call back." That's the trust moment.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">💵</div>
        <h3>Honest about pricing</h3>
        <p>No bait, no "$49 service call!" lies that blow up on site. ChatSales™ sets the right expectation before the truck rolls.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🆘</div>
        <h3>Knows when to call a human</h3>
        <p>True emergencies and weird edge cases hand off to your team fast. No robotic loop, no dropped customers, no missed jobs.</p>
      </div>
    </div>

    <div class="callout" style="margin-top:36px">
      <p>The homeowner doesn't remember which shop had the slickest website. They remember which one texted back first, treated them like a neighbor and showed up when they said they would. That's the loop ChatSales™ closes for you.</p>
    </div>
  </div>
</section>

<section style="background:var(--paper)">
  <div class="container">
    <div class="eyebrow">Best-fit trades</div>
    <h2>Proven across the trades. <span class="accent">Same outcome every time: more booked jobs.</span></h2>
    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card"><div class="icon-box">🌡️</div><h3>HVAC</h3><p>No-cool, no-heat emergencies and high-ticket replacement leads.</p></div>
      <div class="feature-card"><div class="icon-box">🔧</div><h3>Plumbing</h3><p>Burst pipes, sewage backups and after-hours emergencies.</p></div>
      <div class="feature-card"><div class="icon-box">⚡</div><h3>Electrical</h3><p>Panel upgrades, EV chargers and commercial vs. residential routing.</p></div>
      <div class="feature-card"><div class="icon-box">🐛</div><h3>Pest Control</h3><p>Contract upsells, severity triage and recurring service qualification.</p></div>
      <div class="feature-card"><div class="icon-box">🏠</div><h3>Roofing</h3><p>Storm response, insurance leads and high-ticket re-roof opportunities.</p></div>
      <div class="feature-card"><div class="icon-box">💧</div><h3>Restoration</h3><p>Water, fire and mold response where minutes affect job size.</p></div>
      <div class="feature-card"><div class="icon-box">🚪</div><h3>Garage Doors</h3><p>Same-day repair leads and high-conversion replacement inquiries.</p></div>
      <div class="feature-card"><div class="icon-box">🌳</div><h3>Landscaping</h3><p>Design consultations and recurring maintenance contract leads.</p></div>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">Booked 41 same-day HVAC service calls in our first six weeks. These were leads that would've gone to whoever called us back fastest and that wasn't us before.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Carlos Mendez</span>
          <span class="testimonial-role">Owner · Mendez Cooling Co · Dallas, TX</span>
        </div>
        <span class="testimonial-result">+41 booked jobs in 6 weeks</span>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Real shop. Real reply. <span class="accent">Real fast.</span></h2>
  <p>See ChatSales™ running on your trade, your area code, your shop voice, your show-up windows. 15 minutes, real examples, no high-pressure pitch.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Home Services Demo</a></div>
</section>`,

  "legal": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>For Legal Intake</div>
      <h1>Every fact captured. Every consent logged. <span class="accent">Every consult booked.</span></h1>
      <p class="hero-sub">Legal intake isn't a chat, it's a paperwork-driven, time-stamped, consent-captured exchange that has to hold up if the case ever does. ChatSales™ handles the structured part automatically, so the consult call starts where it should: discussing strategy, not asking "when did this happen?"</p>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Legal Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See How It Works →</a>
      </div>
    </div>
    <div class="hero-visual legal-hero-visual">
      <img src="/img/every-fact-captured.png" alt="Legal intake assistant with facts captured consent logged and consult booked documentation">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="eyebrow">The details matter</div>
    <h2>Structured intake. <span class="accent">Before a paralegal picks up the phone.</span></h2>
    <p class="section-intro">Every case lives or dies on what gets captured up front and on whether the consent paperwork was done right. ChatSales™ runs both sides of that automatically, in writing, with timestamps.</p>

    <div class="split" style="margin-top:36px">
      <div>
        <h3 style="color:var(--green-dark);font-weight:500;margin-bottom:14px">What gets captured automatically</h3>
        <ul class="clean-list" style="margin-top:0">
          <li>Case type (PI, family, criminal, immigration, estate, elder)</li>
          <li>Incident date, filing date or arrest date</li>
          <li>Jurisdiction and venue</li>
          <li>Parties involved, for the conflict check</li>
          <li>Police report, court date or filing reference number</li>
          <li>Injury, damage or urgency level</li>
          <li>Insurance carrier (for PI and property cases)</li>
          <li>Best contact method and best time to call</li>
          <li>Time-stamped TCPA consent for texting</li>
        </ul>
      </div>
      <div>
        <h3 style="font-weight:500;margin-bottom:14px">Contract &amp; compliance built in</h3>
        <ul class="clean-list" style="margin-top:0">
          <li>TCPA-compliant consent captured in the first reply</li>
          <li>Full conversation log preserved with timestamps</li>
          <li>Clear "intake assistant, not legal advice" framing</li>
          <li>State-bar-aware language, no unauthorized practice risk</li>
          <li>Conflict-check fields surfaced before the consult is booked</li>
          <li>Encrypted in transit and at rest</li>
          <li>Data export and retention policy your firm controls</li>
          <li>BAA available for firms handling PHI (elder law, med-mal)</li>
        </ul>
      </div>
    </div>

    <div class="callout" style="margin-top:36px">
      <p>The consult call starts where it should: discussing strategy. Not "remind me again when this happened?"</p>
    </div>
  </div>
</section>

<section style="background:var(--paper)">
  <div class="container">
    <div class="eyebrow">Best-fit practice areas</div>
    <h2>Proven across legal. <span class="accent">The firms winning more consults all do this.</span></h2>
    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card"><div class="icon-box">⚖️</div><h3>Personal Injury</h3><p>Anxious, time-sensitive leads who often contact multiple firms in the same hour.</p></div>
      <div class="feature-card"><div class="icon-box">👨‍👩‍👧</div><h3>Family Law</h3><p>Overwhelmed clients navigating divorce, custody and high-emotion intake.</p></div>
      <div class="feature-card"><div class="icon-box">🛡️</div><h3>Criminal Defense</h3><p>Urgent inquiries that need immediate reassurance and clear next steps.</p></div>
      <div class="feature-card"><div class="icon-box">🌐</div><h3>Immigration</h3><p>Cautious leads who need patient, clear, trustworthy first contact.</p></div>
      <div class="feature-card"><div class="icon-box">📜</div><h3>Estate Planning</h3><p>Considered decisions where credibility and warmth matter from message one.</p></div>
      <div class="feature-card"><div class="icon-box">👴</div><h3>Elder Law</h3><p>Family-driven inquiries where empathy and clarity affect the next call.</p></div>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">Our intake conversion went from 22% to 41% in the first 60 days. The leads aren't different, we just get to them first now. That's the whole game in PI.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Rachel Lin, Esq.</span>
          <span class="testimonial-role">Partner · Lin &amp; Marsh Injury Lawyers · Chicago, IL</span>
        </div>
        <span class="testimonial-result">22% → 41% intake conversion</span>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Make the consult call shorter. <span class="accent">Make the close rate higher.</span></h2>
  <p>See exactly what gets captured and what's documented, before your attorney picks up the phone.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Legal Demo</a></div>
</section>`,

  "dental": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>For Dental Practices</div>
      <h1>HIPAA-compliant. US-based. <span class="accent">Built for the practice that can't afford a compliance slip.</span></h1>
      <p class="hero-sub">ChatSales™ runs on US infrastructure with BAA paperwork ready on day one and conversation guardrails tuned to ADA, HIPAA and state dental board rules. Patient inquiries get a fast, calm first reply, without the regulatory exposure of offshore chatbots or generic SaaS tools.</p>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Dental Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See How It Works →</a>
      </div>
    </div>
    <div class="hero-visual dental-hero-visual">
      <img src="/img/dental.png" alt="Dental practice intake assistant with patient fact capture consent compliance and consult booked">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="eyebrow">Built for US dental compliance</div>
    <h2>Six things every dental practice has to get right. <span class="accent">We got them all right.</span></h2>
    <p class="section-intro">Generic chatbots and offshore tools cut corners on PHI, encryption and state board rules. ChatSales™ doesn't, because we built it from day one for US dental practices that answer to HIPAA, the state board and the patient.</p>

    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card">
        <div class="icon-box">🛡️</div>
        <h3>HIPAA-compliant by default</h3>
        <p>BAA paperwork ready on day one. PHI handled the way the regs require, encrypted, logged and access-controlled to your staff.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🇺🇸</div>
        <h3>US-only data storage</h3>
        <p>Every conversation lives on US infrastructure. No offshore servers, no foreign jurisdictions, no chain-of-custody surprises.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🔐</div>
        <h3>End-to-end encryption</h3>
        <p>Encrypted in transit and at rest. Conversation logs auditable, exportable and locked down to authorized practice staff only.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">✉️</div>
        <h3>TCPA-compliant texting</h3>
        <p>Patient consent captured in writing on the first message. Documented opt-out at any point. The exact standard plaintiffs' attorneys check for.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">⚖️</div>
        <h3>State dental board aware</h3>
        <p>ChatSales™ never diagnoses, prescribes or advises treatment. It books consults and answers logistics. Clinical questions go to your staff.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">♿</div>
        <h3>ADA &amp; accessibility</h3>
        <p>Text-based by design. Works with screen readers and accessibility tools so every patient can engage on equal footing.</p>
      </div>
    </div>

    <div class="callout" style="margin-top:36px">
      <p><strong>Your office manager will love you.</strong> Signed BAA, compliance docs, encrypted conversation logs, ready to hand to the auditor if the day ever comes. No more "wait, where is that conversation stored?" surprises.</p>
    </div>
  </div>
</section>

<section style="background:var(--paper)">
  <div class="container">
    <div class="eyebrow">Best-fit practice types</div>
    <h2>Proven in dental. <span class="accent">From implants to family practices that drive electives.</span></h2>
    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card"><div class="icon-box">🦷</div><h3>Implant & Full-Arch</h3><p>High-value inquiries where reassurance and authority shape the consult decision.</p></div>
      <div class="feature-card"><div class="icon-box">✨</div><h3>Cosmetic Dentistry</h3><p>Elective patients who compare practices on confidence as much as clinical fit.</p></div>
      <div class="feature-card"><div class="icon-box">😁</div><h3>Invisalign-Focused</h3><p>Decision-stage patients who need clarity and friction-free booking.</p></div>
      <div class="feature-card"><div class="icon-box">👪</div><h3>Family + Elective</h3><p>Family practices that also drive elective revenue and need both pipelines protected.</p></div>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">Implant consult bookings up 38%. We didn't change our marketing, we just stopped letting inquiries sit for hours. Patients want to feel taken care of before they walk in. ChatSales™ does that work in the first text.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Dr. Priya Shah, DDS</span>
          <span class="testimonial-role">Owner · Bright Smiles Dental · San Diego, CA</span>
        </div>
        <span class="testimonial-result">+38% implant consult bookings</span>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Compliance handled. Patients booked. <span class="accent">Practice manager smiling.</span></h2>
  <p>See ChatSales™ walking through a real dental inquiry, HIPAA-compliant, US-based, BAA ready. 15 minutes, no commitment.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Dental Demo</a></div>
</section>`,

  "senior": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>For Senior Living &amp; Senior Services</div>
      <h1>Help the family choose with <span class="accent">clarity, comfort and confidence.</span></h1>
      <p class="hero-sub">The person reaching out to your community isn't usually the senior. It's their adult child, often 40 to 65, working full time, coordinating with siblings, doing the research at 10pm on their phone after a fall or a hospital scare. They don't need a sales pitch. They need a first reply that helps them feel like they're doing right by their parent.</p>
      <div class="cta-row">
        <a href="/#book-demo" class="btn btn-primary">Book a Senior Living Demo</a>
        <a href="/#see-how-it-works" class="btn btn-outline">See How It Works →</a>
      </div>
    </div>
    <div class="hero-visual senior-hero-visual">
      <img src="/img/senior.png" alt="Senior living match dashboard helping families compare care needs and book a tour">
    </div>
  </div>
</header>

<section>
  <div class="container">
    <div class="eyebrow">Who you're really talking to</div>
    <h2>You're not selling to seniors. <span class="accent">You're winning over their adult children.</span></h2>
    <p class="section-intro">The decision-maker is almost never the resident-to-be. It's a 40-to-65-year-old adult child, often working full time, often coordinating with siblings long-distance, often late at night after a hard family conversation. They aren't comparing communities, they're comparing whoever helps them feel like they're doing this right.</p>

    <div class="feature-grid-4" style="margin-top:36px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
      <div class="feature-card">
        <div class="icon-box">🔎</div>
        <h3>Clarity</h3>
        <p>Real answers about cost, care level, wait time and visit policy, in writing, in the first conversation. Not vague "let's hop on a call to discuss." Real numbers, on their phone, that night.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">🤝</div>
        <h3>Comfort</h3>
        <p>The first sentence acknowledges this is hard. No sales script. No "act now or lose your spot." Just empathy first and the practical conversation when they're ready for it.</p>
      </div>
      <div class="feature-card">
        <div class="icon-box">💚</div>
        <h3>Confidence</h3>
        <p>Specific tour windows that work around their job. Real names of staff they'll meet. Honest comparisons to similar communities. The feeling that this is the right next step, not just the next step.</p>
      </div>
    </div>

    <div class="callout" style="margin-top:36px">
      <p><strong>The adult child making the decision is typically:</strong> 40–65 years old, working full time, often raising their own kids, often coordinating with siblings in other states and almost always researching on their phone late at night after a fall, a hospital scare or a hard family conversation. ChatSales™ is built for that exact window.</p>
    </div>
  </div>
</section>

<section style="background:var(--paper)">
  <div class="container">
    <div class="eyebrow">Best-fit categories</div>
    <h2>Proven across senior services. <span class="accent">From tours booked to move-ins closed.</span></h2>
    <div class="feature-grid-4" style="margin-top:36px">
      <div class="feature-card"><div class="icon-box">🏡</div><h3>Senior Living Communities</h3><p>Independent, assisted and memory care inquiries from families navigating transition.</p></div>
      <div class="feature-card"><div class="icon-box">⚖️</div><h3>Elder Law</h3><p>Estate, conservatorship and end-of-life inquiries that need patient, trusted first contact.</p></div>
      <div class="feature-card"><div class="icon-box">🤝</div><h3>Hospice & Palliative</h3><p>Sensitive, urgent inquiries where empathy in the first message shapes everything after.</p></div>
      <div class="feature-card"><div class="icon-box">☀️</div><h3>Adult Day Services</h3><p>Family inquiries balancing caregiver fatigue with finding the right fit for a loved one.</p></div>
    </div>
  </div>
</section>

<section class="testimonial-strip">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">Families reach out scared and overwhelmed. The fact that someone responds calmly and quickly, that's why they tour with us instead of the community down the road.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Sandra Reyes</span>
          <span class="testimonial-role">Director of Community Relations · Willow Grove Senior Living</span>
        </div>
        <span class="testimonial-result">More tours, warmer families</span>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>When the family chooses you, <span class="accent">it's because they felt seen first.</span></h2>
  <p>See exactly how the first conversation does that work, the empathy, the clarity and the calm next step that books the tour.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Senior Living Demo</a></div>
</section>`,

  "pricing": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>Pricing</div>
      <h1>Priced to pay for itself. <span class="accent">On the first booked job.</span></h1>
      <p class="hero-sub">ChatSales™ is for shop owners who already know what a missed lead is worth. If one job is worth $300 or $3,000, your first reply shouldn't be silence.</p>
    </div>
    <div class="hero-visual pricing-hero-visual">
      <img src="/img/priced-to-pay-for-itself.png" alt="Three-step ChatSales payback flow from lead follow-up to booked appointment to first job covering cost">
    </div>
  </div>
</header>

<section class="tool-section" id="justified-value">
  <div class="container">
    <div class="tool-eyebrow">Pays For Itself</div>
    <h2 class="tool-heading">See the exact day ChatSales™ <span class="accent">stops costing money and starts making money.</span></h2>
    <p class="tool-sub">Type in the after-hours leads slipping through your shop each month, your average job ticket and which plan you'd run. We'll show you the day every month ChatSales™ pays for itself and what's left in your pocket after that. Simple as that.</p>

    <div class="tool-tabs" id="pb-tabs">
      <button class="tool-tab active" data-preset="plumbing">Plumbing</button>
      <button class="tool-tab" data-preset="electrical">Electricians</button>
      <button class="tool-tab" data-preset="pest">Pest Control</button>
      <button class="tool-tab" data-preset="hvac">HVAC</button>
    </div>

    <div class="tool-card">
      <div class="tool-inputs-row cols-3">
        <div class="tool-input">
          <label for="pb-leads" title="After-hours calls and form fills your shop currently isn't connecting with">After-hours leads you miss</label>
          <input type="number" id="pb-leads" value="30" min="1" max="500">
        </div>
        <div class="tool-input">
          <label for="pb-val">Average job ticket</label>
          <div class="tool-money-input">
            <span>$</span><input type="number" id="pb-val" value="339" min="50" max="50000">
          </div>
        </div>
        <div class="tool-input">
          <label for="pb-tier">Which plan</label>
          <select id="pb-tier">
            <option value="640">Starter, $640/mo</option>
            <option value="980" selected>Standard, $980/mo</option>
            <option value="1650">Pro, $1,650/mo</option>
          </select>
        </div>
      </div>

      <div class="tool-result">
        <div class="tool-result-card">
          <div class="tool-result-label">Pays For Itself On Day</div>
          <div class="tool-result-big" id="pb-day">3</div>
          <div class="tool-result-sub" id="pb-day-sub">of every month, first week</div>
        </div>
        <div class="tool-bars">
          <div>
            <div class="tool-bar-label">
              <span>What ChatSales™ costs you</span>
              <span class="tool-bar-val" id="pb-cost">$980</span>
            </div>
            <div class="tool-bar-track"><div class="tool-bar-fill red" id="pb-bar-cost" style="width:8%"></div></div>
          </div>
          <div>
            <div class="tool-bar-label">
              <span>What ChatSales™ makes you back</span>
              <span class="tool-bar-val" id="pb-revenue">$12,750</span>
            </div>
            <div class="tool-bar-track"><div class="tool-bar-fill green" id="pb-bar-rev" style="width:100%"></div></div>
          </div>
          <div class="tool-net">
            <span>What you pocket every month</span>
            <span class="tool-net-val" id="pb-net">+$11,753</span>
          </div>
        </div>
      </div>

      <p class="tool-disclaimer">Math: after-hours leads you miss × your average job ticket - the plan cost = what you pocket every month. Built on the assumption ChatSales™ catches the after-hours leads your shop currently isn't connecting with.</p>
    </div>
  </div>
</section>

<section class="testimonial-strip" style="background:var(--white);padding-top:0">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">It's the only software in our stack the front desk actually wants to use. It makes their job easier instead of adding another dashboard. And payback was on day 4 of month one, we run the numbers monthly.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">Jessica Wu</span>
          <span class="testimonial-role">Practice Manager · Pacific Northwest Dental · Seattle, WA</span>
        </div>
        <span class="testimonial-result">Day-4 payback, monthly</span>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="pricing-grid">
      <div class="price-card">
        <div class="price-name">Starter</div>
        <h3>For one-shop crews</h3>
        <p>Smaller shops that just need every lead answered fast. We text them back, ask a few questions and pass it to you.</p>
        <a href="/#book-demo" class="btn btn-outline">Talk to Us</a>
      </div>
      <div class="price-card featured">
        <div class="featured-badge">MOST POPULAR</div>
        <div class="price-name">Standard</div>
        <h3>For most working shops</h3>
        <p>The one most of our customers run on. Every lead answered, sorted hot/warm/cold and dropped on your team with the info they need.</p>
        <a href="/#book-demo" class="btn btn-primary">Talk to Us</a>
      </div>
      <div class="price-card">
        <div class="price-name">Pro</div>
        <h3>For shops that want it dialed in</h3>
        <p>For owners who want the texts to sound exactly like their best CSR, with tighter scripts and sales-side polish.</p>
        <a href="/#book-demo" class="btn btn-outline">Talk to Us</a>
      </div>
      <div class="price-card">
        <div class="price-name">Multi-Shop</div>
        <h3>For multiple locations</h3>
        <p>Running two, five or fifty locations? Routing per shop, custom tone per market and one dashboard for the lot.</p>
        <a href="/#book-demo" class="btn btn-outline">Talk to Us</a>
      </div>
    </div>
  </div>
</section>

<section class="dark">
  <div class="container narrow">
    <div class="callout callout-dark">
      <p>If one missed lead is worth hundreds or thousands of dollars, your first response should not begin with silence.</p>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Find the tier that wins for you. <span class="accent">Honest answer in 15 minutes.</span></h2>
  <p>We'll walk through your numbers and recommend a fit or tell you ChatSales™ isn't right for your business.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Demo</a></div>
</section>`,

  "faq": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>Frequently asked questions</div>
      <h1>What winning operators <span class="accent">ask before they buy.</span></h1>
      <p class="hero-sub">Direct answers to the questions operators ask before they buy. If yours isn't here, the demo is the fastest way to get it answered.</p>
    </div>
    <div class="hero-visual faq-hero-visual">
      <img src="/img/faq.png" alt="ChatSales frequently asked questions grouped by product, setup, fit, integrations, pricing and security">
    </div>
  </div>
</header>

<section style="padding-top:50px">
  <div class="container">
    <div class="faq-controls">
      <div class="faq-search-wrap"><input type="text" id="faq-search" placeholder="Search questions..." autocomplete="off"></div>
      <div class="faq-categories">
        <button class="faq-cat active" data-cat="all">All</button>
        <button class="faq-cat" data-cat="product">Product</button>
        <button class="faq-cat" data-cat="setup">Setup &amp; Onboarding</button>
        <button class="faq-cat" data-cat="fit">Fit &amp; Use Cases</button>
        <button class="faq-cat" data-cat="integrations">Integrations</button>
        <button class="faq-cat" data-cat="pricing">Pricing &amp; Billing</button>
        <button class="faq-cat" data-cat="security">Security &amp; Compliance</button>
      </div>
    </div>

    <div class="faq-list" id="faq-list">
      <div class="faq-item" data-cat="product">
        <div class="faq-q">What is ChatSales™?<div class="faq-toggle">+</div></div>
        <div class="faq-a">A tool that texts your leads back the second they come in, from a real iPhone number, like a real person. It asks a few quick questions, figures out who's serious and drops the good ones in front of your team.</div>
      </div>
      <div class="faq-item" data-cat="product">
        <div class="faq-q">Is ChatSales™ just a chatbot?<div class="faq-toggle">+</div></div>
        <div class="faq-a">No. Most chatbots feel like chatbots, the customer knows it, hates it and bounces. ChatSales™ is built to feel like the office texting you back. Same buttons-and-bubbles experience as texting your buddy.</div>
      </div>
      <div class="faq-item" data-cat="product">
        <div class="faq-q">Why does the blue-bubble thing matter?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Because nobody trusts a shortcode. A blue bubble from a real iPhone number looks like a real person and that's the difference between the customer texting back or ignoring you.</div>
      </div>
      <div class="faq-item" data-cat="product">
        <div class="faq-q">What if a lead texts me from Android?<div class="faq-toggle">+</div></div>
        <div class="faq-a">No problem. ChatSales™ sends a regular text instead. Same fast reply, same questions, same handoff to your team, just no blue bubble.</div>
      </div>
      <div class="faq-item" data-cat="product">
        <div class="faq-q">Does ChatSales™ replace my team?<div class="faq-toggle">+</div></div>
        <div class="faq-a">No. Your CSRs and office staff are still doing the work. ChatSales™ just makes sure every lead gets a fast first reply and shows up on your team's desk already sorted, so they spend their time on the live ones.</div>
      </div>
      <div class="faq-item" data-cat="product">
        <div class="faq-q">What happens after hours?<div class="faq-toggle">+</div></div>
        <div class="faq-a">ChatSales™ answers 24/7. Honestly, that's where most of our customers see the biggest payback, nights and weekends, when your competition is asleep and the customer is shopping around.</div>
      </div>
      <div class="faq-item" data-cat="setup">
        <div class="faq-q">How fast can we go live?<div class="faq-toggle">+</div></div>
        <div class="faq-a">A couple of days for most shops. We hook up your lead sources, build the script for your trade and run a few test conversations with you before flipping it on.</div>
      </div>
      <div class="faq-item" data-cat="setup">
        <div class="faq-q">Do I need to provide a phone number?<div class="faq-toggle">+</div></div>
        <div class="faq-a">No. We set up a fresh iPhone number for your shop, no extra charge. If you'd rather use the number your customers already know, we can do that too.</div>
      </div>
      <div class="faq-item" data-cat="fit">
        <div class="faq-q">Which trades and industries fit best?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Home services (HVAC, plumbing, electrical, pest control, roofing), law firms doing PI and family law intake, dental practices doing implants and cosmetic work and senior living. Basically anywhere a customer is comparing two or three shops and the fastest reply wins the job.</div>
      </div>
      <div class="faq-item" data-cat="fit">
        <div class="faq-q">When is it NOT worth it?<div class="faq-toggle">+</div></div>
        <div class="faq-a">If your jobs are small-ticket ($20 oil change kind of stuff), if your customers never text or if you're already the only shop in town. Then we're probably not worth the spend and we'll tell you that on the demo.</div>
      </div>
      <div class="faq-item" data-cat="integrations">
        <div class="faq-q">Does it work with my software?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Yes. We connect to ServiceTitan, Housecall Pro, Jobber, FieldEdge, Workiz, HubSpot, Salesforce, Clio, MyCase, Dentrix, Open Dental and most others. If you're on something weird, we have a workaround that hooks up to just about anything.</div>
      </div>
      <div class="faq-item" data-cat="integrations">
        <div class="faq-q">Can it book the job on the calendar?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Yes. Customer texts in, ChatSales™ talks them through it and the appointment ends up on your calendar, Calendly, Acuity, Google Calendar, your dispatch software, whatever you use.</div>
      </div>
      <div class="faq-item" data-cat="pricing">
        <div class="faq-q">How much does ChatSales™ cost?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Depends on how many leads you get and what kind of shop you run. We don't post a sticker price because the real number depends on the answers you'd give us on a 15-minute call. We'll tell you on the demo, no games.</div>
      </div>
      <div class="faq-item" data-cat="pricing">
        <div class="faq-q">Am I locked into a long contract?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Nope. Starter and Standard are month-to-month, quit any time, no penalty. Pro and Multi-Shop usually go annual because of the custom setup work, but we'll lay it all out for you up front.</div>
      </div>
      <div class="faq-item" data-cat="security">
        <div class="faq-q">Is my customer data safe?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Yes. Every text is locked down with bank-level encryption, both in transit and stored. We don't sell your data, we don't share it, period.</div>
      </div>
      <div class="faq-item" data-cat="security">
        <div class="faq-q">Is it HIPAA-compliant for dental and senior living?<div class="faq-toggle">+</div></div>
        <div class="faq-a">Yes, we have a HIPAA-compliant setup for dental, medical and senior living shops and we'll sign the paperwork (the "BAA") that the government wants. Just mention it on the demo.</div>
      </div>
    </div>

    <div class="faq-empty" id="faq-empty" style="display:none">
      <p>No questions match that search. <a href="/#book-demo" style="color:var(--green-dark);font-weight:500">Ask us directly on a demo</a>.</p>
    </div>

    <div class="mid-cta">
      <div class="mid-cta-text">
        <div class="mid-cta-title">Don't see your question?</div>
        <div class="mid-cta-sub">The fastest way to get a real answer is 15 minutes with our team, no high-pressure pitch, just your specific situation.</div>
      </div>
      <div class="btn-row">
        <a href="/#book-demo" class="btn-white">Ask Us On a Demo</a>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <h2>Still have questions? <span class="accent">Get them answered on a 15-minute demo.</span></h2>
  <p>15 minutes. Real examples. No high-pressure pitch.</p>
  <div class="cta-row"><a href="/#book-demo" class="btn btn-primary">Book a Demo</a></div>
</section>`,

  "demo": String.raw`<header class="page-header with-visual">
  <div class="page-header-bg"></div>
  <div class="hero-inner">
    <div class="hero-copy">
      <div class="tag-pill"><div class="live-dot"></div>Book a demo</div>
      <h1>Find out what you'd win. <span class="accent">In 15 minutes.</span></h1>
      <p class="hero-sub">If your shop runs on inbound leads and your first reply is what wins or loses the job, let's take a look. 15 minutes, real examples on your numbers, no high-pressure pitch.</p>
    </div>
    <div class="hero-visual demo-hero-visual">
      <img src="/img/demoimage.png" alt="ChatSales 15-minute demo agenda with opportunity dashboard and business snapshot">
    </div>
  </div>
</header>

<section class="testimonial-strip" style="padding:0 32px 24px">
  <div class="container">
    <div class="testimonial">
      <div class="testimonial-quote-mark">“</div>
      <div class="testimonial-body">
        <p class="testimonial-quote">The demo was the most useful 15 minutes of my month. They showed me exactly where we were losing leads, even before I signed up.</p>
        <div class="testimonial-attr">
          <span class="testimonial-name">David Park, Esq.</span>
          <span class="testimonial-role">Founder · Park Family Law · Portland, OR</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="split">
      <div>
        <h2>What you'll walk out with.</h2>
        <p style="font-size:16px;color:var(--ink-soft);line-height:1.7;margin-top:20px">A real demo of ChatSales™ texting a lead in your industry. A walkthrough of where you're probably losing jobs. A real-world number for what you'd pull back. And a straight answer on whether we're worth the spend.</p>
        <div class="callout" style="margin-top:32px">
          <p>If we're not the right fit, we'll tell you straight. Either way, 15 minutes and you'll see exactly where you're leaking jobs.</p>
        </div>
        <div style="margin-top:32px">
          <h4 style="margin-bottom:14px;color:var(--green-dark)">You're probably a good fit if:</h4>
          <ul class="clean-list" style="margin-top:0">
            <li>your average job is over $300</li>
            <li>you get more than 30 leads a month</li>
            <li>after-hours leads are slipping through the cracks</li>
            <li>your customers usually call 2–5 shops</li>
            <li>the first reply makes or breaks the deal</li>
          </ul>
        </div>
      </div>
      <div>
        <form class="demo-form">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="First and last name" required>

          <label for="email">Work email</label>
          <input type="email" id="email" placeholder="you@yourbusiness.com" required>

          <label for="company">Business name</label>
          <input type="text" id="company" placeholder="Your business or firm">

          <label for="industry">Your industry</label>
          <select id="industry" required>
            <option value="">Choose one...</option>
            <option>Home Services</option>
            <option>Legal Intake</option>
            <option>Dental</option>
            <option>Senior Living / Senior Services</option>
            <option>Other</option>
          </select>

          <label for="lead-source">Where do most leads come from?</label>
          <input type="text" id="lead-source" placeholder="Website forms, Google LSA, calls, referrals...">

          <label for="lead-value">Approximate average lead value</label>
          <input type="text" id="lead-value" placeholder="e.g., $500, $5,000, varies">

          <label for="leak">Where do you think follow-up breaks down?</label>
          <textarea id="leak" placeholder="After hours? On weekends? When the office is slammed? Be honest, we've heard it all."></textarea>

          <label for="response">How fast does your team currently respond?</label>
          <select id="response">
            <option value="">Choose one...</option>
            <option>Within 5 minutes</option>
            <option>15-60 minutes</option>
            <option>1-4 hours</option>
            <option>Same day, eventually</option>
            <option>Next business day or later</option>
            <option>It varies a lot</option>
          </select>

          <button type="submit" class="btn btn-primary" style="margin-top:8px">Book My Demo</button>
        </form>
      </div>
    </div>
  </div>
</section>`
} as const;

export type LegacySectionKey = keyof typeof legacySections;
