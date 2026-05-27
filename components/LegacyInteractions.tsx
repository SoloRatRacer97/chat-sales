'use client';

import { useEffect } from 'react';

const TRADES = {
  plumbing: { label: 'Plumbing', avgJob: 339, inquiries: 65, missed: 35, booking: 65 },
  electrical: { label: 'Electricians', avgJob: 350, inquiries: 40, missed: 30, booking: 60 },
  pest: { label: 'Pest Control', avgJob: 190, inquiries: 31, missed: 25, booking: 55 },
  hvac: { label: 'HVAC', avgJob: 350, inquiries: 89, missed: 35, booking: 65 },
};

type TradeKey = keyof typeof TRADES;

function fmtMoney(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

function bump(el: Element | null) {
  if (!(el instanceof HTMLElement)) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function input(id: string) {
  return document.getElementById(id) as HTMLInputElement | null;
}

function select(id: string) {
  return document.getElementById(id) as HTMLSelectElement | null;
}

function setText(id: string, value: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setWidth(id: string, value: number) {
  const el = document.getElementById(id) as HTMLElement | null;
  if (el) el.style.width = value + '%';
}

export function LegacyInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const on = (
      target: EventTarget,
      type: string,
      handler: EventListener,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    setupRevenueCalculator(on);
    setupResponseBenchmark(on);
    setupPaybackCalculator(on);
    setupConversationSimulator(on);
    setupFaq(on);
    setupDemoForm(on);

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}

type On = (
  target: EventTarget,
  type: string,
  handler: EventListener,
  options?: AddEventListenerOptions,
) => void;

function setupRevenueCalculator(on: On) {
  const jobIn = input('calc-job');
  const inqIn = input('calc-inquiries');
  const missIn = input('calc-missed');
  const bookIn = input('calc-book');
  if (!jobIn || !inqIn || !missIn || !bookIn) return;
  const jobField = jobIn;
  const inqField = inqIn;
  const missField = missIn;
  const bookField = bookIn;

  function update() {
    const job = Number(jobField.value) || 0;
    const inq = Number(inqField.value) || 0;
    const missed = (Number(missField.value) || 0) / 100;
    const book = (Number(bookField.value) || 0) / 100;
    const jobsRecoverable = inq * missed * book;
    const monthly = jobsRecoverable * job;
    const annual = monthly * 12;
    const daily = monthly / 30;

    setText('calc-big', fmtMoney(monthly));
    bump(document.getElementById('calc-big'));
    setText('calc-jobs', jobsRecoverable.toFixed(1));
    setText('calc-annual', fmtMoney(annual));
    setText('calc-daily', fmtMoney(daily));
    setText('calc-net', fmtMoney(monthly) + ' / mo');
    setWidth('calc-bar-jobs', Math.min(100, (jobsRecoverable / 30) * 100));
    setWidth('calc-bar-annual', Math.min(100, (annual / (15000 * 12)) * 100));
    setWidth('calc-bar-daily', Math.min(100, (daily / 600) * 100));
  }

  function applyPreset(name: string | undefined) {
    const trade = TRADES[name as TradeKey];
    if (!trade) return;
    jobField.value = String(trade.avgJob);
    inqField.value = String(trade.inquiries);
    missField.value = String(trade.missed);
    bookField.value = String(trade.booking);
    update();
  }

  [jobField, inqField, missField, bookField].forEach((el) => on(el, 'input', update));
  document.querySelectorAll<HTMLElement>('#calc-tabs .tool-tab').forEach((tab) => {
    on(tab, 'click', () => {
      document.querySelectorAll('#calc-tabs .tool-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      applyPreset(tab.dataset.preset);
    });
  });
  applyPreset('plumbing');
}

function setupResponseBenchmark(on: On) {
  const benchInput = input('bench-input');
  const benchUnit = select('bench-unit');
  const marker = document.getElementById('bench-marker') as HTMLElement | null;
  if (!benchInput || !benchUnit || !marker) return;
  const benchField = benchInput;
  const unitField = benchUnit;
  const markerEl = marker;

  const industries = {
    'home-services': { topQ: 5, median: 240, slow: 1440, topLabel: 'Under 5 min', name: 'home services' },
    legal: { topQ: 30, median: 480, slow: 2880, topLabel: 'Under 30 min', name: 'legal intake' },
    dental: { topQ: 60, median: 360, slow: 1440, topLabel: 'Under 1 hr', name: 'dental practices' },
    senior: { topQ: 120, median: 720, slow: 2880, topLabel: 'Under 2 hr', name: 'senior living' },
  };
  let active: keyof typeof industries = 'home-services';

  function minToPct(min: number) {
    const clamped = Math.max(1, Math.min(min, 2880));
    return (Math.log(clamped) / Math.log(2880)) * 100;
  }

  function update() {
    const minutes = (Number(benchField.value) || 0) * (Number(unitField.value) || 1);
    const data = industries[active];
    markerEl.style.left = minToPct(minutes) + '%';
    let perc: string;
    let lift: string;
    let bad = false;

    if (minutes <= data.topQ) { perc = 'Fastest in the game'; lift = '+5% more'; }
    else if (minutes <= data.median * 0.5) { perc = 'Faster than most'; lift = '+15% more'; }
    else if (minutes <= data.median) { perc = 'Right in the middle'; lift = '+30% more'; }
    else if (minutes <= data.slow) { perc = 'Slower than most'; lift = '+47% more'; bad = true; }
    else { perc = 'Way too slow'; lift = '+120% more'; bad = true; }

    setText('bench-percentile', perc);
    setText('bench-top', data.topLabel);
    setText('bench-lift', lift);

    const verdict = document.getElementById('bench-verdict');
    if (!verdict) return;
    if (minutes <= data.topQ) {
      verdict.textContent = `You're the fastest game in town for ${data.name}. You're already beating most of your competition to the punch, keep this pace and you'll keep winning the jobs.`;
    } else if (minutes <= data.median) {
      verdict.textContent = `You're in the middle of the pack for ${data.name}. The fastest shops hit ${data.topLabel.toLowerCase()}, close that gap and you start booking a lot more of the jobs you're already paying to get in front of.`;
    } else if (minutes <= data.slow) {
      verdict.textContent = `This is the leak. By the time you reply, the lead has already heard from somebody faster. The shops winning your jobs reply in ${data.topLabel.toLowerCase()} and that's the fix.`;
    } else {
      verdict.textContent = "By the time you get back to people, they've already hired somebody else. This is the single biggest hole in your shop right now and the easiest one to plug.";
    }
    verdict.classList.toggle('bench-bad', bad);
  }

  document.querySelectorAll<HTMLElement>('#bench-tabs .tool-tab').forEach((tab) => {
    on(tab, 'click', () => {
      document.querySelectorAll('#bench-tabs .tool-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      active = (tab.dataset.bench || 'home-services') as keyof typeof industries;
      update();
    });
  });
  on(benchField, 'input', update);
  on(unitField, 'change', update);

  const bar = document.querySelector<HTMLElement>('#response-benchmark .bench-bar');
  if (bar) {
    let dragging = false;
    const pctToMin = (pct: number) => Math.max(1, Math.round(Math.exp((Math.max(0, Math.min(100, pct)) / 100) * Math.log(2880))));
    const setFromClientX = (clientX: number) => {
      const rect = bar.getBoundingClientRect();
      const min = pctToMin(((clientX - rect.left) / rect.width) * 100);
      if (min >= 90) {
        unitField.value = '60';
        benchField.value = String(Math.max(1, Math.round(min / 60)));
      } else {
        unitField.value = '1';
        benchField.value = String(min);
      }
      update();
    };
    const eventX = (event: MouseEvent | TouchEvent) => ('touches' in event ? event.touches[0]?.clientX : event.clientX);
    const startDrag = (event: MouseEvent | TouchEvent) => {
      dragging = true;
      bar.classList.add('is-dragging');
      const x = eventX(event);
      if (typeof x === 'number') setFromClientX(x);
      event.preventDefault();
    };
    const moveDrag = (event: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const x = eventX(event);
      if (typeof x === 'number') setFromClientX(x);
      event.preventDefault();
    };
    const endDrag = () => {
      dragging = false;
      bar.classList.remove('is-dragging');
    };

    on(bar, 'mousedown', startDrag as EventListener);
    on(document, 'mousemove', moveDrag as EventListener);
    on(document, 'mouseup', endDrag as EventListener);
    on(bar, 'touchstart', startDrag as EventListener, { passive: false });
    on(document, 'touchmove', moveDrag as EventListener, { passive: false });
    on(document, 'touchend', endDrag as EventListener);
    on(document, 'touchcancel', endDrag as EventListener);
  }
  update();
}

function setupPaybackCalculator(on: On) {
  const leadsIn = input('pb-leads');
  const valIn = input('pb-val');
  const tierIn = select('pb-tier');
  if (!leadsIn || !valIn || !tierIn) return;
  const leadsField = leadsIn;
  const valueField = valIn;
  const tierField = tierIn;

  function ordinalSuffix(n: number) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function update() {
    const leads = Number(leadsField.value) || 0;
    const value = Number(valueField.value) || 0;
    const cost = Number(tierField.value) || 0;
    const monthlyRevenue = leads * value;
    const net = monthlyRevenue - cost;
    const dailyRev = monthlyRevenue / 30;
    let day = dailyRev > 0 ? Math.ceil(cost / dailyRev) : 99;
    day = Math.max(1, Math.min(day, 30));

    setText('pb-cost', fmtMoney(cost));
    setText('pb-revenue', fmtMoney(monthlyRevenue));
    const netEl = document.getElementById('pb-net') as HTMLElement | null;
    if (netEl) {
      netEl.textContent = (net >= 0 ? '+' : '') + fmtMoney(net);
      netEl.style.color = net >= 0 ? 'var(--green-dark)' : 'var(--red)';
    }
    setText('pb-day', String(day));
    bump(document.getElementById('pb-day'));
    setText('pb-day-sub', day === 1 ? 'of every month, instant payback' : day <= 7 ? 'of every month, first week' : day < 30 ? 'of every month' : 'requires more leads to pay back');
    const max = Math.max(cost, monthlyRevenue, 1);
    setWidth('pb-bar-cost', (cost / max) * 100);
    setWidth('pb-bar-rev', (monthlyRevenue / max) * 100);
  }

  function applyPreset(name: string | undefined) {
    const trade = TRADES[name as TradeKey];
    if (!trade) return;
    valueField.value = String(trade.avgJob);
    leadsField.value = String(Math.max(1, Math.round(trade.inquiries * (trade.missed / 100))));
    update();
  }

  [leadsField, valueField, tierField].forEach((el) => on(el, 'input', update));
  on(tierField, 'change', update);
  document.querySelectorAll<HTMLElement>('#pb-tabs .tool-tab').forEach((tab) => {
    on(tab, 'click', () => {
      document.querySelectorAll('#pb-tabs .tool-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      applyPreset(tab.dataset.preset);
    });
  });
  update();
  void ordinalSuffix;
}

function setupConversationSimulator(on: On) {
  const body = document.getElementById('sim-body');
  const inputEl = input('sim-input');
  const sendBtn = document.getElementById('sim-send') as HTMLButtonElement | null;
  const scoreBar = document.getElementById('sim-score') as HTMLElement | null;
  if (!body || !inputEl || !sendBtn || !scoreBar) return;

  const SIM = {
    hvac: {
      greeting: "Hey there! Saw you reached out about your AC. What's going on with it?",
      smallTalk: [
        { match: /\b(where|what city|where are you|location|located|based|town|area)\b/i, reply: "We're based in Austin and our techs cover most of central Texas. What part of town are you in? That helps me figure out who can swing by fastest." },
        { match: /\b(weather|hot|heat ?wave|cold|temperature|degree|raining|storm|outside|nice out)\b/i, reply: "Ha, yeah, this heatwave's been brutal. That's actually why we're slammed today, units giving up left and right. What's yours doing?" },
        { match: /\b(bot|robot|are you (a )?real|are you human|is this real|automated|ai\b|machine)\b/i, reply: "Fair question. I'm a fast text assistant, I get you sorted before our dispatcher picks up. A real person's on the line too if you want, just say the word." },
        { match: /\b(cost|price|expensive|how much|charge|fee|estimate|quote)\b/i, reply: "Honest answer, depends what's wrong. No charge to come take a look. Want me to get you on the schedule?" },
        { match: /^(hi|hey|hello|yo\b|sup\b|howdy)/i, reply: "Hey! Thanks for reaching out. What's the AC doing?" },
      ],
      followups: ["Got it, how old is the unit, roughly? And is it the whole house or just one zone?", 'Okay. Quick one: do you know the brand or roughly when it was installed?', 'Makes sense. Last thing, would today between 1–3pm work or is first thing tomorrow morning better?', "Perfect. I've got you on the books. A tech will text you 30 min before they head over. ✓"],
      fallback: 'Got it. Anything else you want to add before I get you on the schedule?',
      score: { tier: 'hot', label: 'HOT', summary: 'Emergency HVAC repair · same-day booked · est. $400–$890 ticket' },
    },
    legal: {
      greeting: "Hi, thanks for reaching out. I want to make sure you get connected to the right person quickly. Can you tell me a bit about what's going on?",
      smallTalk: [
        { match: /\b(where|what city|where are you|location|located|based|county|state)\b/i, reply: 'Our firm is in Chicago, but we handle cases across Illinois and Indiana. Where did this happen? That matters for which court it goes to.' },
        { match: /\b(bot|robot|are you (a )?real|are you human|is this real|automated|ai\b)\b/i, reply: "Good question. I'm a quick intake assistant, I gather the basics so the right attorney can call you back fast. An actual paralegal can jump in any moment if you'd prefer." },
        { match: /\b(cost|price|expensive|how much|charge|fee|retainer)\b/i, reply: 'PI cases like yours are usually no-fee-unless-we-win. The consult itself is free. Want to set that up?' },
        { match: /\b(scared|nervous|worried|anxious|overwhelmed|stressed)\b/i, reply: "Totally understandable, most folks calling us feel exactly that way. Take a breath. We'll walk through it together, one step at a time." },
        { match: /^(hi|hey|hello)/i, reply: "Hi, thanks for reaching out. I want to get you connected to the right person fast. What's going on?" },
      ],
      followups: ["I'm really sorry you're dealing with that. To get you with the right attorney fast, was anyone injured and was a police report filed?", 'Got it. And roughly when did this happen, within the last few days or longer ago?', 'Thanks for sharing that. The attorney handling intake today is available for a 15-min call. Could I grab your best phone number?', 'Perfect. You\'re scheduled for a consult call at 2pm today. The attorney will call you directly.'],
      fallback: 'Got it. Want me to have the attorney reach out so you can talk it through directly?',
      score: { tier: 'hot', label: 'HOT', summary: 'PI inquiry · recent · ready for consult · attorney scheduled' },
    },
    dental: {
      greeting: "Hi! Thanks for your interest. I'd love to help you figure out the best next step. What were you hoping to learn about?",
      smallTalk: [
        { match: /\b(where|what city|where are you|location|located|based|near me)\b/i, reply: "We're right off Mission Bay in San Diego, easy parking, ground floor. Where are you coming from? I can give you the best route." },
        { match: /\b(bot|robot|are you (a )?real|are you human|is this real|automated|ai\b)\b/i, reply: "Honest answer: I'm a friendly assistant that gets your basics down so Dr. Shah can give you a real answer fast. A team member can take over any time, just say." },
        { match: /\b(cost|price|expensive|how much|charge|fee|insurance|financing)\b/i, reply: 'Implants run a range depending on what you need. We do free consults and we have financing options that work for almost any budget. Want to come in and get a real number?' },
        { match: /\b(scared|nervous|worried|anxious|afraid|hate the dentist)\b/i, reply: "Totally normal, we hear it every day. Dr. Shah is famous for going slow and being honest. Promise it's not as scary as you're picturing." },
        { match: /^(hi|hey|hello)/i, reply: 'Hi! Thanks for reaching out. What were you hoping to learn about?' },
      ],
      followups: ['Great, implants are one of our specialties. To give you a clearer picture: are we talking about one tooth, a few or full-arch?', "Got it. And is this from a recent issue or something you've been thinking about for a while?", 'Makes sense. We offer free consults, Dr. Shah has openings Thursday afternoon or Saturday morning. Which works?', "Perfect. You're booked Thursday at 2:30pm. We'll text a confirmation and intake form."],
      fallback: "Got it. Anything else you'd like me to flag for Dr. Shah before the consult?",
      score: { tier: 'hot', label: 'HOT', summary: 'Implant consult · ready to book · est. $4K–$12K treatment plan' },
    },
    senior: {
      greeting: "Hi, thank you for reaching out. I know this can feel like a lot. I'm here to help, whenever you're ready, tell me a bit about your situation.",
      smallTalk: [
        { match: /\b(where|what city|where are you|location|located|based|nearby)\b/i, reply: "We're Willow Grove, just off the highway in west Phoenix, easy to get to and we have plenty of guest parking. Where are you coming from?" },
        { match: /\b(bot|robot|are you (a )?real|are you human|is this real|automated|ai\b)\b/i, reply: "Good question, I'm a friendly assistant here to help you get the right answers without waiting. A real community advisor can join us any time, just let me know." },
        { match: /\b(cost|price|expensive|how much|charge|fee|afford|medicare|insurance)\b/i, reply: 'Honest answer: it depends on care level. We can walk through it on a tour and we work with families on payment options most communities don\'t. Want to come visit?' },
        { match: /\b(scared|nervous|worried|anxious|overwhelmed|hard|sad|guilty)\b/i, reply: "I hear you and I want you to know that feeling is completely normal. You're doing right by them just by looking. Let's go slow together." },
        { match: /^(hi|hey|hello)/i, reply: "Hi, I'm so glad you reached out. Whenever you're ready, tell me a little about your situation." },
      ],
      followups: ['I hear you. That\'s a lot to navigate. Can you tell me a little about your mom, is she living on her own now or with family?', 'Thank you for sharing that. Is there a current safety concern or are you planning ahead for the next few months?', 'That helps a lot. Our community has tours available this week, would it help to come see the space, even just to get a feel for it?', "Wonderful. I have you down for Thursday at 11am. Don't worry about being prepared, just come as you are."],
      fallback: "Thank you for sharing that. Anything else you'd like me to know before the tour?",
      score: { tier: 'hot', label: 'HOT', summary: 'Family inquiry · active need · tour booked · warm handoff' },
    },
  };

  type Scenario = keyof typeof SIM;
  let currentScenario: Scenario = 'hvac';
  let scriptStep = 0;
  let conversationDone = false;

  const addBubble = (text: string, who: string) => {
    const bubble = document.createElement('div');
    bubble.className = 'sim-bubble ' + who;
    bubble.textContent = text;
    body.appendChild(bubble);
    body.scrollTop = body.scrollHeight;
  };
  const showTyping = () => {
    const typing = document.createElement('div');
    typing.className = 'sim-bubble typing';
    typing.id = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
  };
  const hideTyping = () => document.getElementById('typing-indicator')?.remove();
  const matchSmallTalk = (text: string, scenario: Scenario) => SIM[scenario].smallTalk.find((item) => item.match.test(text))?.reply || null;
  const resetSim = (scenario: Scenario) => {
    currentScenario = scenario;
    scriptStep = 0;
    conversationDone = false;
    body.innerHTML = '<div class="sim-timestamp">Today</div>';
    scoreBar.style.display = 'none';
    inputEl.disabled = false;
    sendBtn.disabled = false;
    inputEl.value = '';
    inputEl.placeholder = 'Ask anything, "what city are you in?", "how\'s the weather?" or describe the problem...';
    window.setTimeout(() => addBubble(SIM[scenario].greeting, 'us'), 250);
  };
  const sendMessage = async () => {
    const text = inputEl.value.trim();
    if (!text || conversationDone) return;
    inputEl.value = '';
    inputEl.disabled = true;
    sendBtn.disabled = true;
    addBubble(text, 'them');
    await new Promise((resolve) => window.setTimeout(resolve, 380));
    showTyping();
    await new Promise((resolve) => window.setTimeout(resolve, 900 + Math.random() * 700));
    hideTyping();
    const chitChat = matchSmallTalk(text, currentScenario);
    if (chitChat) {
      addBubble(chitChat, 'us');
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
      return;
    }
    const data = SIM[currentScenario];
    if (scriptStep < data.followups.length) {
      addBubble(data.followups[scriptStep], 'us');
      scriptStep++;
    } else {
      addBubble(data.fallback, 'us');
    }
    if (scriptStep >= data.followups.length) {
      conversationDone = true;
      const badge = document.getElementById('sim-score-badge');
      const summary = document.getElementById('sim-score-summary');
      if (badge) {
        badge.className = 'sim-score-badge ' + data.score.tier;
        badge.textContent = data.score.label;
      }
      if (summary) summary.textContent = data.score.summary;
      scoreBar.style.display = 'flex';
      inputEl.placeholder = 'Conversation complete · Pick another scenario';
    } else {
      inputEl.disabled = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  };

  document.querySelectorAll<HTMLElement>('.sim-scenario').forEach((btn) => {
    on(btn, 'click', () => {
      document.querySelectorAll('.sim-scenario').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      resetSim((btn.dataset.scenario || 'hvac') as Scenario);
    });
  });
  on(sendBtn, 'click', () => void sendMessage());
  on(inputEl, 'keydown', (event) => {
    if ((event as KeyboardEvent).key === 'Enter') void sendMessage();
  });
  resetSim('hvac');
}

function setupFaq(on: On) {
  const list = document.getElementById('faq-list');
  if (!list) return;
  const search = input('faq-search');
  const cats = document.querySelectorAll<HTMLElement>('.faq-cat');
  const empty = document.getElementById('faq-empty') as HTMLElement | null;
  let activeCat = 'all';

  on(document, 'click', (event) => {
    const item = (event.target as Element | null)?.closest('.faq-item');
    if (item) item.classList.toggle('open');
  });

  const filter = () => {
    const q = (search?.value || '').toLowerCase().trim();
    let shown = 0;
    list.querySelectorAll<HTMLElement>('.faq-item').forEach((item) => {
      const cat = item.dataset.cat;
      const txt = item.textContent?.toLowerCase() || '';
      const show = (activeCat === 'all' || cat === activeCat) && (!q || txt.includes(q));
      item.classList.toggle('hidden', !show);
      if (show) shown++;
    });
    if (empty) empty.style.display = shown === 0 ? 'block' : 'none';
  };

  cats.forEach((cat) => {
    on(cat, 'click', () => {
      cats.forEach((x) => x.classList.remove('active'));
      cat.classList.add('active');
      activeCat = cat.dataset.cat || 'all';
      filter();
    });
  });
  if (search) on(search, 'input', filter);
}

function setupDemoForm(on: On) {
  document.querySelectorAll<HTMLFormElement>('.demo-form').forEach((form) => {
    on(form, 'submit', (event) => {
      event.preventDefault();
      let message = form.querySelector<HTMLElement>('.demo-form-submitted');
      if (!message) {
        message = document.createElement('div');
        message.className = 'demo-form-submitted';
        form.appendChild(message);
      }
      message.textContent = 'Thanks. Form submission will be wired to your CRM or Calendly next.';
    });
  });
}
