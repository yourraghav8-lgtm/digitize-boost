/**
 * RAVIX | Digital Growth & Marketing Agency
 * Main Interactive Application Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initStickyHeader();
  initPortfolioFilter();
  initProcessTabs();
  initPhoneMockupSwitcher();
  initContactForm();
  initStrategyModal();
  initAnimatedCounters();
  initRoasCalculator();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    if (menuBackdrop) menuBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    if (menuBackdrop) menuBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* --------------------------------------------------------------------------
   2. Sticky Header with Scroll Effect
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('bg-[#F7F3EA]/95', 'backdrop-blur-md', 'border-b', 'border-[#111111]/10', 'shadow-md');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#F7F3EA]/95', 'backdrop-blur-md', 'border-b', 'border-[#111111]/10', 'shadow-md');
      header.classList.add('bg-transparent');
    }
  });
}

/* --------------------------------------------------------------------------
   3. Portfolio / Recent Work Filter
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#FF5A36]', 'text-white', 'shadow-md');
        b.classList.add('bg-[#EFEAE0]', 'text-[#6B6862]', 'hover:bg-[#E8E2D6]');
      });

      btn.classList.add('bg-[#FF5A36]', 'text-white', 'shadow-md');
      btn.classList.remove('bg-[#EFEAE0]', 'text-[#6B6862]', 'hover:bg-[#E8E2D6]');

      // Filter cards
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
          card.classList.add('fade-in-scale');
        } else {
          card.classList.add('hidden');
          card.classList.remove('fade-in-scale');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Process Step Interactive Tabs
   -------------------------------------------------------------------------- */
function initProcessTabs() {
  const stepButtons = document.querySelectorAll('.process-step-btn');
  const stepPanels = document.querySelectorAll('.process-step-panel');

  if (stepButtons.length === 0) return;

  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepIndex = btn.dataset.step;

      stepButtons.forEach(b => {
        b.classList.remove('border-[#FF5A36]', 'bg-[#FF5A36]/10', 'text-[#111111]', 'font-bold');
        b.classList.add('border-[#111111]/10', 'bg-[#FFFDF8]', 'text-[#6B6862]');
      });

      btn.classList.add('border-[#FF5A36]', 'bg-[#FF5A36]/10', 'text-[#111111]', 'font-bold');
      btn.classList.remove('border-[#111111]/10', 'bg-[#FFFDF8]', 'text-[#6B6862]');

      stepPanels.forEach(panel => {
        if (panel.id === `process-panel-${stepIndex}`) {
          panel.classList.remove('hidden');
          panel.classList.add('fade-in-scale');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('fade-in-scale');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive 3D Smartphone Mockup Switcher
   -------------------------------------------------------------------------- */
function initPhoneMockupSwitcher() {
  const switcherBtns = document.querySelectorAll('.phone-switcher-btn');
  const screenTabs = document.querySelectorAll('.phone-screen-tab');

  if (switcherBtns.length === 0 || screenTabs.length === 0) return;

  switcherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetScreen = btn.dataset.screen;

      // Update button active state
      switcherBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#FF5A36]', 'text-white');
        b.classList.add('bg-[#EFEAE0]', 'text-[#6B6862]', 'hover:bg-[#E8E2D6]');
      });

      btn.classList.add('active', 'bg-[#FF5A36]', 'text-white');
      btn.classList.remove('bg-[#EFEAE0]', 'text-[#6B6862]', 'hover:bg-[#E8E2D6]');

      // Switch screen tabs
      screenTabs.forEach(tab => {
        if (tab.id === targetScreen) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Embedded Final Contact Form ("Ready to Build What's Next?")
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('final-contact-form');
  const contactSuccess = document.getElementById('final-contact-success');
  const contactReset = document.getElementById('final-contact-reset');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      Submitting Your Details...
    `;

    setTimeout(() => {
      contactForm.classList.add('hidden');
      if (contactSuccess) {
        contactSuccess.classList.remove('hidden');
        contactSuccess.classList.add('fade-in-scale');
      }
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1200);
  });

  if (contactReset) {
    contactReset.addEventListener('click', () => {
      contactForm.reset();
      contactForm.classList.remove('hidden');
      if (contactSuccess) contactSuccess.classList.add('hidden');
    });
  }
}

/* --------------------------------------------------------------------------
   7. Strategy Call Modal
   -------------------------------------------------------------------------- */
function initStrategyModal() {
  const modal = document.getElementById('strategy-modal');
  const openButtons = document.querySelectorAll('[data-open-modal="strategy"]');
  const closeButtons = document.querySelectorAll('[data-close-modal="strategy"]');
  const modalForm = document.getElementById('modal-strategy-form');
  const modalSuccess = document.getElementById('modal-strategy-success');
  const modalReset = document.getElementById('modal-strategy-reset');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = modalForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Securing Your Strategy Session...
      `;

      setTimeout(() => {
        modalForm.classList.add('hidden');
        if (modalSuccess) {
          modalSuccess.classList.remove('hidden');
          modalSuccess.classList.add('fade-in-scale');
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1000);
    });
  }

  if (modalReset) {
    modalReset.addEventListener('click', () => {
      if (modalForm && modalSuccess) {
        modalForm.reset();
        modalForm.classList.remove('hidden');
        modalSuccess.classList.add('hidden');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   8. Animated Stats Counters
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const duration = 1600;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = target * ease;

          el.textContent = prefix + (decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal).toLocaleString()) + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = prefix + (decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()) + suffix;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counters.forEach(c => observer.observe(c));
}

/* --------------------------------------------------------------------------
   9. Growth & ROI Calculator (INR Currency)
   -------------------------------------------------------------------------- */
function initRoasCalculator() {
  const spendSlider = document.getElementById('calc-spend');
  const roasSlider = document.getElementById('calc-roas');

  const spendValDisplay = document.getElementById('calc-spend-val');
  const roasValDisplay = document.getElementById('calc-roas-val');
  const targetRoasDisplay = document.getElementById('calc-target-roas');
  const currentRevenueDisplay = document.getElementById('calc-current-revenue');
  const projectedRevenueDisplay = document.getElementById('calc-projected-revenue');
  const profitLiftDisplay = document.getElementById('calc-profit-lift');
  const annualGainDisplay = document.getElementById('calc-annual-gain');

  if (!spendSlider || !roasSlider) return;

  function formatCurrency(num) {
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }

  function updateCalculator() {
    const spend = parseFloat(spendSlider.value);
    const currentRoas = parseFloat(roasSlider.value);

    if (spendValDisplay) spendValDisplay.textContent = formatCurrency(spend);
    if (roasValDisplay) roasValDisplay.textContent = currentRoas.toFixed(1) + 'x';

    // Projected ROAS model
    const targetRoas = Math.min(6.5, Math.max(currentRoas + 1.3, currentRoas * 1.55));

    if (targetRoasDisplay) targetRoasDisplay.textContent = targetRoas.toFixed(1) + 'x';

    const currentRev = spend * currentRoas;
    const projectedRev = spend * targetRoas;
    const monthlyLift = projectedRev - currentRev;
    const annualLift = monthlyLift * 12;

    if (currentRevenueDisplay) currentRevenueDisplay.textContent = formatCurrency(currentRev);
    if (projectedRevenueDisplay) projectedRevenueDisplay.textContent = formatCurrency(projectedRev);
    if (profitLiftDisplay) profitLiftDisplay.textContent = '+' + formatCurrency(monthlyLift);
    if (annualGainDisplay) annualGainDisplay.textContent = '+' + formatCurrency(annualLift);
  }

  spendSlider.addEventListener('input', updateCalculator);
  roasSlider.addEventListener('input', updateCalculator);
  updateCalculator();
}
