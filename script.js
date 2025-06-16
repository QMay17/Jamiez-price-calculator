// Task Data Structure based on Home Maintenance Checklist
const taskData = {
    'front-yard': [
        {
            id: 'lawn-irrigation',
            name: 'Lawn (irrigation system / sprinkler heads)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$100',
            costAmount: 75,
            difficulty: 'medium',
            tooltip: 'Regular lawn care including irrigation system maintenance and sprinkler head adjustments'
        },
        {
            id: 'flower-beds-shrubs',
            name: 'Flower Beds / Decorative Shrubs',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$80',
            costAmount: 65,
            difficulty: 'easy',
            tooltip: 'Pruning, weeding, and seasonal care for decorative landscaping elements'
        },
        {
            id: 'trees-pruning',
            name: 'Trees (fruit, shade, pruning needs)',
            time: '2–4 hours',
            timeHours: 3,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'hard',
            tooltip: 'Professional tree care including pruning, health assessment, and seasonal maintenance'
        },
        {
            id: 'landscape-lighting',
            name: 'Landscape Lighting',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$60–$100',
            costAmount: 80,
            difficulty: 'medium',
            tooltip: 'Installation, repair, and maintenance of landscape lighting systems'
        },
        {
            id: 'mailbox-condition',
            name: 'Mailbox (condition, locking)',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$75',
            costAmount: 62.5,
            difficulty: 'easy',
            tooltip: 'Mailbox condition assessment, lock maintenance, and security upgrades'
        },
        {
            id: 'address-numbers',
            name: 'Address numbers (visible & lit)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$60',
            costAmount: 50,
            difficulty: 'easy',
            tooltip: 'Ensuring address numbers are clearly visible and properly illuminated'
        },
        {
            id: 'water-features',
            name: 'Water features (fountain, pond)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$150',
            costAmount: 115,
            difficulty: 'medium',
            tooltip: 'Water feature cleaning, pump maintenance, and seasonal care'
        },
        {
            id: 'smart-irrigation',
            name: 'Smart irrigation controller',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$120',
            costAmount: 97.5,
            difficulty: 'medium',
            tooltip: 'Installation, programming, and maintenance of smart irrigation controllers'
        }
    ],
    'side-yards': [
        {
            id: 'access-gate',
            name: 'Access gate working',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$60–$100',
            costAmount: 80,
            difficulty: 'medium',
            tooltip: 'Gate hardware adjustment, hinge lubrication, and repair services'
        },
        {
            id: 'trash-recycling',
            name: 'Trash & recycling storage',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$60',
            costAmount: 50,
            difficulty: 'easy',
            tooltip: 'Cleanup and organization of trash and recycling storage areas'
        },
        {
            id: 'hose-bibs',
            name: 'Hose bibs or spigots',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$125',
            costAmount: 100,
            difficulty: 'medium',
            tooltip: 'Hose bib replacement, repair, and winterization services'
        },
        {
            id: 'ac-condenser',
            name: 'A/C condenser units (clean, accessible)',
            time: '1 hour',
            timeHours: 1,
            cost: '$60–$100',
            costAmount: 80,
            difficulty: 'medium',
            tooltip: 'AC condenser unit cleaning, accessibility checks, and basic maintenance'
        },
        {
            id: 'utility-meters',
            name: 'Utility meters (accessible, protected)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: 'N/A',
            costAmount: 0,
            difficulty: 'easy',
            tooltip: 'Ensuring utility meters are accessible and protected (coordination with utility companies)'
        }
    ],
    'back-yard': [
        {
            id: 'fence-damage',
            name: 'Fence (damage, latches)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$75–$200',
            costAmount: 137.5,
            difficulty: 'medium',
            tooltip: 'Fence damage repair, gate latch adjustment, and structural assessment'
        },
        {
            id: 'deck-patio',
            name: 'Deck or Patio (clean/inspect)',
            time: '2–3 hours',
            timeHours: 2.5,
            cost: '$100–$300',
            costAmount: 200,
            difficulty: 'medium',
            tooltip: 'Deck cleaning, inspection for damage, and maintenance recommendations'
        },
        {
            id: 'patio-cover',
            name: 'Patio Cover / Pergola',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$150–$500',
            costAmount: 325,
            difficulty: 'hard',
            tooltip: 'Patio cover cleaning, structural inspection, and weather protection maintenance'
        },
        {
            id: 'outdoor-kitchen',
            name: 'Outdoor kitchen / BBQ',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            difficulty: 'medium',
            tooltip: 'BBQ cleaning, outdoor kitchen maintenance, and gas line inspection'
        },
        {
            id: 'misters-fans',
            name: 'Misters / Cooling Fans',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$100',
            costAmount: 75,
            difficulty: 'medium',
            tooltip: 'Misting system cleaning, fan maintenance, and seasonal setup'
        },
        {
            id: 'fire-pit',
            name: 'Fire Pit',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$150',
            costAmount: 112.5,
            difficulty: 'medium',
            tooltip: 'Fire pit cleaning, safety inspection, and fuel management'
        },
        {
            id: 'outdoor-heaters',
            name: 'Outdoor heaters',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$125',
            costAmount: 100,
            difficulty: 'medium',
            tooltip: 'Outdoor heater cleaning, gas line inspection, and safety maintenance'
        },
        {
            id: 'drainage-issues',
            name: 'Drainage / pooling issues',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$200–$500+',
            costAmount: 350,
            difficulty: 'hard',
            tooltip: 'Drainage system evaluation and solutions for water pooling problems'
        },
        {
            id: 'pet-area',
            name: 'Pet damage / pet area',
            time: '1 hour',
            timeHours: 1,
            cost: '$50–$150',
            costAmount: 100,
            difficulty: 'easy',
            tooltip: 'Pet area cleanup, damage assessment, and maintenance solutions'
        },
        {
            id: 'fruit-trees',
            name: 'Fruit trees / garden (harvest)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$200',
            costAmount: 140,
            difficulty: 'medium',
            tooltip: 'Fruit tree pruning, harvest coordination, and garden maintenance'
        },
        {
            id: 'water-barrels',
            name: 'Water barrels / greywater',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$250',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'Water barrel maintenance and greywater system management'
        }
    ],
    'outdoor-furniture': [
        {
            id: 'outdoor-furniture-clean',
            name: 'Outdoor furniture (clean)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$100',
            costAmount: 75,
            difficulty: 'easy',
            tooltip: 'Cleaning and maintenance of patio furniture and cushions'
        },
        {
            id: 'umbrellas-shade',
            name: 'Umbrellas / shade structures',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$80',
            costAmount: 60,
            difficulty: 'easy',
            tooltip: 'Umbrella cleaning, repair, and shade structure maintenance'
        },
        {
            id: 'storage-shed',
            name: 'Outdoor storage box / shed',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$100',
            costAmount: 75,
            difficulty: 'easy',
            tooltip: 'Storage shed organization, weatherproofing, and maintenance'
        },
        {
            id: 'toys-swings',
            name: 'Toys / swing sets',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'Swing set inspection, toy organization, and safety maintenance'
        },
        {
            id: 'hot-tub-pool',
            name: 'Hot tub / Pool',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$150–$250/month',
            costAmount: 200,
            difficulty: 'hard',
            tooltip: 'Regular pool/hot tub cleaning, chemical balancing, and equipment maintenance'
        },
        {
            id: 'pool-safety',
            name: 'Pool safety fence / alarm',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'medium',
            tooltip: 'Pool safety fence inspection, alarm testing, and compliance checks'
        }
    ],
    'garage': [
        {
            id: 'overhead-storage',
            name: 'Overhead storage / racks',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'Overhead storage rack installation and garage organization systems'
        },
        {
            id: 'electrical-lighting',
            name: 'Electrical outlets / lighting',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$75–$150',
            costAmount: 112.5,
            difficulty: 'hard',
            tooltip: 'Electrical outlet testing, lighting installation, and electrical safety checks'
        },
        {
            id: 'ev-charger',
            name: 'EV charger (prep)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$300–$800',
            costAmount: 550,
            difficulty: 'hard',
            tooltip: 'EV charger installation prep, electrical assessment, and permit coordination'
        },
        {
            id: 'tools-storage',
            name: 'Tools & equipment storage',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$150',
            costAmount: 100,
            difficulty: 'easy',
            tooltip: 'Tool organization systems and equipment storage optimization'
        },
        {
            id: 'garage-laundry',
            name: 'Laundry appliances (garage)',
            time: '1 hour',
            timeHours: 1,
            cost: '$100–$200',
            costAmount: 150,
            difficulty: 'medium',
            tooltip: 'Garage-based laundry appliance maintenance and utility connections'
        },
        {
            id: 'pest-check',
            name: 'Pest activity check',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$100–$150',
            costAmount: 125,
            difficulty: 'easy',
            tooltip: 'Pest activity assessment and preventive control measures'
        }
    ],
    'exterior': [
        {
            id: 'roof-inspection',
            name: 'Roof (age, material, visible damage)',
            time: '1 hour',
            timeHours: 1,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'hard',
            tooltip: 'Professional roof inspection for age, material condition, and visible damage'
        },
        {
            id: 'gutters-downspouts',
            name: 'Gutters & Downspouts',
            time: '1.5–2 hours',
            timeHours: 1.75,
            cost: '$60–$120',
            costAmount: 90,
            difficulty: 'medium',
            tooltip: 'Gutter cleaning, debris removal, and downspout flow testing'
        },
        {
            id: 'siding-paint',
            name: 'Siding / Stucco / Paint condition',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$200–$500',
            costAmount: 350,
            difficulty: 'medium',
            tooltip: 'Siding inspection, stucco assessment, and paint condition evaluation'
        },
        {
            id: 'chimney-flue',
            name: 'Chimney / Flue',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'hard',
            tooltip: 'Chimney inspection, flue cleaning coordination, and safety assessment'
        },
        {
            id: 'windows-screens',
            name: 'Windows / Screens',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$150',
            costAmount: 115,
            difficulty: 'easy',
            tooltip: 'Window cleaning, screen repair, and weatherstripping maintenance'
        },
        {
            id: 'skylights-solar',
            name: 'Skylights / Solar tubes',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$200',
            costAmount: 150,
            difficulty: 'medium',
            tooltip: 'Skylight cleaning, seal inspection, and solar tube maintenance'
        },
        {
            id: 'solar-panels',
            name: 'Solar panels (visual check)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'medium',
            tooltip: 'Solar panel visual inspection, cleaning coordination, and performance monitoring'
        },
        {
            id: 'exterior-cameras',
            name: 'Exterior cameras / motion lights',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'Security camera cleaning, motion light testing, and system maintenance'
        },
        {
            id: 'wifi-extender',
            name: 'Wi-Fi signal / mesh extender',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$300',
            costAmount: 200,
            difficulty: 'medium',
            tooltip: 'Wi-Fi signal optimization, mesh extender setup, and network troubleshooting'
        }
    ],
    'utilities': [
        {
            id: 'water-system',
            name: 'Drinking water system (filtration, softener)',
            time: '1 hour',
            timeHours: 1,
            cost: '$100–$200',
            costAmount: 150,
            difficulty: 'medium',
            tooltip: 'Water filter replacement, softener maintenance, and system testing'
        },
        {
            id: 'propane-tank',
            name: 'Propane tank (BBQ, heater, fireplace)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$50–$100',
            costAmount: 75,
            difficulty: 'easy',
            tooltip: 'Propane tank exchange, connection inspection, and safety checks'
        },
        {
            id: 'firewood-storage',
            name: 'Firewood storage',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            difficulty: 'easy',
            tooltip: 'Firewood stacking, storage organization, and pest prevention'
        },
        {
            id: 'backup-generator',
            name: 'Backup generator',
            time: '1 hour',
            timeHours: 1,
            cost: '$150–$300',
            costAmount: 225,
            difficulty: 'hard',
            tooltip: 'Generator maintenance, fuel management, and operational testing'
        },
        {
            id: 'rainwater-barrels',
            name: 'Rainwater harvesting barrels',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$200',
            costAmount: 150,
            difficulty: 'medium',
            tooltip: 'Rainwater barrel cleaning, system maintenance, and mosquito prevention'
        },
        {
            id: 'septic-sewer',
            name: 'Septic system or city sewer',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$200–$500',
            costAmount: 350,
            difficulty: 'hard',
            tooltip: 'Septic system inspection coordination and sewer line maintenance'
        },
        {
            id: 'irrigation-controller',
            name: 'Irrigation controller (manual, smart)',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            difficulty: 'medium',
            tooltip: 'Irrigation timer programming, seasonal adjustments, and system optimization'
        }
    ],
    'pet-care': [
        {
            id: 'dog-walking',
            name: 'Dog Walking & Exercise',
            time: '1-2 hours',
            timeHours: 1.5,
            cost: '$25-$50',
            costAmount: 37.5,
            difficulty: 'easy',
            tooltip: 'Regular dog walking service with exercise and socialization'
        },
        {
            id: 'pet-grooming',
            name: 'Pet Grooming & Care',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$80-$200',
            costAmount: 140,
            difficulty: 'medium',
            tooltip: 'Professional pet grooming coordination and basic care services'
        },
        {
            id: 'pet-sitting',
            name: 'Pet Sitting & Care',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$100-$250',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'In-home pet care while you are away, including feeding and companionship'
        },
        {
            id: 'pet-transport',
            name: 'Pet Transportation',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$40-$100',
            costAmount: 70,
            difficulty: 'easy',
            tooltip: 'Safe pet transportation to appointments, grooming, and activities'
        }
    ],
    'pest-wildlife': [
        {
            id: 'rodent-insect',
            name: 'Rodent or insect issues',
            time: '1-2 hours',
            timeHours: 1.5,
            cost: '$150-$300',
            costAmount: 225,
            difficulty: 'medium',
            tooltip: 'Locate signs of infestation, clean affected areas, and set traps or deterrents to prevent recurrence.'
        },
        {
            id: 'spider-webs-nests',
            name: 'Spider webs / nests',
            time: '0.5-1 hours',
            timeHours: 0.75,
            cost: '$75-$150',
            costAmount: 125,
            difficulty: 'medium',
            tooltip: 'Remove webs and nests from corners, eaves, and fixtures to maintain a clean and pest-free space.'
        },
        {
            id: 'skunk-raccoon',
            name: 'Skunk or raccoon sightings',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$200-$500',
            costAmount: 350,
            difficulty: 'hard',
            tooltip: 'Inspect for entry points and signs of activity; block access or arrange for humane wildlife removal.'
        }
    ]
};

// Bundle Configurations
const bundles = {
    'new-homeowner': [
        'lawn-irrigation', 'electrical-lighting', 'access-gate', 'exterior-cameras',
        'roof-inspection', 'water-system',
        'trash-recycling', 'pest-check', 
    ],
    'busy-professional': [
        'electrical-lighting','roof-inspection', 'wifi-extender', 'water-system',
        'trash-recycling', 'pest-check', 'exterior-cameras', 'irrigation-controller'
    ],
    'pet-parents': [
        'dog-walking', 'pet-grooming', 'pet-sitting', 'pet-transport', 'pet-area'
    ],
    'seasonal-prep': [
        'outdoor-furniture-clean', 'misters-fans', 
        'outdoor-heaters', 'firewood-storage'
    ]
};

// Membership Plans Data
const membershipPlans = {
    essentials: {
        name: 'Essentials',
        monthlyPrice: 208,
        annualPrice: 2500,
        hours: 4,
        maxTasks: 4
    },
    executive: {
        name: 'Executive',
        monthlyPrice: 417,
        annualPrice: 5000,
        hours: 10,
        maxTasks: 8
    },
    platinum: {
        name: 'Platinum',
        monthlyPrice: 833,
        annualPrice: 10000,
        hours: 20,
        maxTasks: 16
    }
};

// Service Bundle Plans Data
const serviceBundles = {
    'pet-parents': {
        name: 'Pet Parents Bundle',
        monthlyPrice: 125,
        annualPrice: 1500,
        tasks: ['dog-walking', 'pet-grooming', 'pet-sitting', 'pet-transport'],
        maxTasks: 4
    },
    'curb-appeal': {
        name: 'Curb Appeal Bundle',
        monthlyPrice: 83,
        annualPrice: 1000,
        tasks: ['trash-recycling'],
        maxTasks: 4
    },
    'seasons-greetings': {
        name: 'Seasons Greetings Bundle',
        monthlyPrice: 100,
        annualPrice: 1200,
        tasks: ['outdoor-furniture-clean', 'misters-fans', 'outdoor-heaters', 'firewood-storage'],
        maxTasks: 4
    }
};

// Global state
let selectedTasks = new Set();
let isAnnualView = false;
let selectedBundles = new Set();

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
    setupEventListeners();
    populateTaskCategories();
    updateSummary();
});

function initializeCalculator() {
    // Add animation classes
    document.querySelector('.calculator-container').classList.add('fade-in');
    
    // Initialize FAQ functionality
    setupFAQ();
}

function setupEventListeners() {
    // Get to Know You Better form listeners 
    setupKnowYouListeners();

    // Bundle button functionality
    document.querySelectorAll('.bundle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bundleName = this.dataset.bundle;
            addBundle(bundleName);
            this.classList.add('success-highlight');
            setTimeout(() => {
                this.classList.remove('success-highlight');
            }, 1000);
        });
    });

    // Frequency toggle functionality
    document.querySelectorAll('.freq-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            isAnnualView = this.dataset.freq === 'annually';
            updateSummary();
        });
    });

    // CTA button functionality
    const ctaPrimary = document.querySelector('.cta-primary');
    if (ctaPrimary) {
        ctaPrimary.addEventListener('click', function() {
            window.open('https://www.jamiez.com/get-started', '_blank');
        });
    }
}

function setupKnowYouListeners() {
    // Property type radio buttons
    document.querySelectorAll('input[name="property-type"]').forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Property type selected:', this.value);
            // You can store this data or use it for analytics
        });
    });

    // Lot type checkboxes
    document.querySelectorAll('input[name="lot-type"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Lot type toggled:', this.value, this.checked);
        });
    });

    // Community features checkboxes
    document.querySelectorAll('input[name="community-features"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Community feature toggled:', this.value, this.checked);
        });
    });

    // Pets & animals checkboxes
    document.querySelectorAll('input[name="pets-animals"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Pet/animal feature toggled:', this.value, this.checked);
        });
    });

    // Services & providers checkboxes
    document.querySelectorAll('input[name="services-providers"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Service provider toggled:', this.value, this.checked);
        });
    });
}

function populateTaskCategories() {
    Object.keys(taskData).forEach(category => {
        const tasksContainer = document.getElementById(`${category}-tasks`);
        if (!tasksContainer) return;
        
        const tasks = taskData[category];
        
        tasksContainer.innerHTML = tasks.map(task => `
            <div class="task-item" data-task-id="${task.id}">
                <input type="checkbox" class="task-checkbox" id="${task.id}" />
                <div class="task-info">
                    <div class="task-name">${task.name}</div>
                    <div class="task-details">
                        <div class="task-time">
                            <i class="fas fa-clock"></i>
                            ${task.time}
                        </div>
                        <div class="task-cost">
                            <i class="fas fa-dollar-sign"></i>
                            ${task.cost}
                        </div>
                        <div class="task-difficulty difficulty-${task.difficulty}">
                            <i class="fas fa-signal"></i>
                            ${task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
                        </div>
                    </div>
                </div>
                <div class="task-tooltip" data-tooltip="${task.tooltip}">
                    <i class="fas fa-info-circle"></i>
                </div>
            </div>
        `).join('');

        // Add event listeners to checkboxes
        tasksContainer.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const taskId = this.id;
                const taskItem = this.closest('.task-item');
                
                if (this.checked) {
                    selectedTasks.add(taskId);
                    taskItem.classList.add('selected');
                    taskItem.classList.add('slide-in');
                } else {
                    selectedTasks.delete(taskId);
                    taskItem.classList.remove('selected');
                }
                
                updateSummary();
            });
        });
    });
}

function addBundle(bundleName) {
    const bundleTasks = bundles[bundleName];
    if (!bundleTasks) return;

    const clickedButton = document.querySelector(`.bundle-btn[data-bundle="${bundleName}"]`);
    const wasAlreadyActive = clickedButton.classList.contains('active');

    // Clear all existing selections and their visual states first
    selectedTasks.forEach(taskId => {
        const checkbox = document.getElementById(taskId);
        if (checkbox) {
            checkbox.checked = false;
            checkbox.closest('.task-item').classList.remove('selected');
        }
    });
    selectedTasks.clear(); // Ensure the set is empty after unchecking

    document.querySelectorAll('.bundle-btn').forEach(btn => {
        btn.classList.remove('active'); // Remove active from all bundle buttons
        btn.classList.remove('success-highlight'); // Remove any lingering animations
    });
    selectedBundles.clear(); // Clear the set that tracks active bundles

    if (!wasAlreadyActive) {
        // If the clicked button was NOT active, activate it and its tasks
        selectedBundles.add(bundleName);
        bundleTasks.forEach(taskId => {
            selectedTasks.add(taskId);
            const checkbox = document.getElementById(taskId);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.closest('.task-item').classList.add('selected');
            }
        });
        clickedButton.classList.add('active');
        clickedButton.classList.add('success-highlight');
        setTimeout(() => {
            clickedButton.classList.remove('success-highlight');
        }, 1000);
    }
    // If wasAlreadyActive is true, we simply cleared everything and didn't re-add it,
    // effectively deselecting the bundle. This is the desired toggle behavior.

    updateSummary();
    // The updateBundleButtonStates() function call is now redundant as its logic
    // is directly handled within this function.
}

function updateSummary() {
    const selectedTasksArray = Array.from(selectedTasks);
    
    // Calculate base totals (monthly)
    let totalDIYTime = 0;
    let totalDIYCost = 0;
    let totalMarketCost = 0;
    
    selectedTasksArray.forEach(taskId => {
        const task = findTaskById(taskId);
        if (task) {
            totalDIYTime += task.timeHours;
            totalDIYCost += 25; // Estimated supply cost
            totalMarketCost += task.costAmount;
        }
    });

    // Find recommended plan
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, totalDIYTime);
    const planCost = isAnnualView ? recommendedPlan.annualPrice : recommendedPlan.monthlyPrice;
    
    // Calculate savings with proper scaling
    let marketVsJamiezSavings;
    let diyVsJamiezSavings;
    
    if (isAnnualView) {
        marketVsJamiezSavings = (totalMarketCost * 12) - planCost;
        diyVsJamiezSavings = ((totalDIYCost * 12) + (totalDIYTime * 25 * 12)) - planCost;
    } else {
        marketVsJamiezSavings = totalMarketCost - planCost;
        diyVsJamiezSavings = (totalDIYCost + (totalDIYTime * 25)) - planCost;
    }
    
    const bestSavings = Math.max(marketVsJamiezSavings, 0);

    // Update comparison table
    updateComparisonTable(
        totalDIYTime,
        totalDIYCost,
        totalMarketCost,
        planCost,
        selectedTasksArray.length,
        recommendedPlan
    );
    
    // Update savings highlight
    updateSavingsHighlight(bestSavings, totalDIYTime);
    
    // Update plan cards
    updatePlanCards(recommendedPlan);
    
    // Enable/disable download button based on selection
    const downloadBtn = document.getElementById('downloadReport');
    if (downloadBtn) {
        downloadBtn.disabled = selectedTasks.size === 0;
    }
}

function updateComparisonTable(diyTime, diyCost, marketCost, jamiezCost, taskCount, recommendedPlan) {
    const timeUnit = isAnnualView ? 'year' : 'month';
    const multiplier = isAnnualView ? 12 : 1;
    
    // Format time values
    const formatTime = (hours) => {
        const totalHours = Math.round(hours * multiplier);
        return `${totalHours} hours/${timeUnit}`;
    };
    
    // Format cost values
    const formatCost = (cost) => {
        const totalCost = Math.round(cost * multiplier);
        return `${totalCost.toLocaleString()}`;
    };
    
    // Update time values
    const diyTimeEl = document.querySelector('.diy-time');
    const marketTimeEl = document.querySelector('.market-time');
    const jamiezTimeEl = document.querySelector('.jamiez-time');
    
    if (diyTimeEl) diyTimeEl.textContent = formatTime(diyTime);
    if (marketTimeEl) marketTimeEl.textContent = '0 hours';
    if (jamiezTimeEl) jamiezTimeEl.textContent = '0 hours';
    
    // Update cost values
    const diyCostEl = document.querySelector('.diy-cost');
    const marketCostEl = document.querySelector('.market-cost');
    const jamiezCostEl = document.querySelector('.jamiez-cost');
    
    if (diyCostEl) diyCostEl.textContent = formatCost(diyCost);
    if (marketCostEl) marketCostEl.textContent = formatCost(marketCost);
    if (jamiezCostEl) jamiezCostEl.textContent = `${jamiezCost.toLocaleString()}`;
    
    // Calculate and update coverage
    const coverage = taskCount <= recommendedPlan.maxTasks ? 100 : Math.round((recommendedPlan.maxTasks / taskCount) * 100);
    const diyCoverageEl = document.querySelector('.diy-coverage');
    const marketCoverageEl = document.querySelector('.market-coverage');
    const jamiezCoverageEl = document.querySelector('.jamiez-coverage');
    
    if (diyCoverageEl) diyCoverageEl.textContent = '100%';
    if (marketCoverageEl) marketCoverageEl.textContent = '100%';
    
    // Update Jamiez coverage with icon
    if (jamiezCoverageEl) {
        jamiezCoverageEl.innerHTML = `${coverage}% `;
        
        if (coverage === 100) {
            jamiezCoverageEl.innerHTML += '<i class="fas fa-check" style="color: #28a745;"></i>';
        } else if (coverage >= 80) {
            jamiezCoverageEl.innerHTML += '<i class="fas fa-exclamation-circle" style="color: #ffc107;"></i>';
        } else {
            jamiezCoverageEl.innerHTML += '<i class="fas fa-exclamation-triangle" style="color: #dc3545;"></i>';
        }
    }
}

function updateSavingsHighlight(savings, timeHours) {
    const period = isAnnualView ? 'Annual' : 'Monthly';
    const multiplier = isAnnualView ? 12 : 1;
    
    const savingsLabelEl = document.querySelector('.savings-label');
    const savingsValueEl = document.querySelector('.savings-value');
    const timeLabelEl = document.querySelector('.time-label');
    const timeValueEl = document.querySelector('.time-value');
    
    if (savingsLabelEl) savingsLabelEl.textContent = `Potential ${period} Savings`;
    if (savingsValueEl) savingsValueEl.textContent = savings > 0 ? `${Math.round(savings).toLocaleString()}` : '$0';
    if (timeLabelEl) timeLabelEl.textContent = 'Time Saved';
    if (timeValueEl) timeValueEl.textContent = `${Math.round(timeHours * multiplier)} hours/${period.toLowerCase()}`;
    
    // Add animation for positive savings
    const savingsCard = document.querySelector('.savings-highlight');
    if (savingsCard) {
        if (savings > 0) {
            savingsCard.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        } else {
            savingsCard.style.background = '#667eea';
        }
    }
}

function updatePlanCards(recommendedPlan) {
    // Reset all plan cards
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('recommended');
    });
    
    // Highlight the recommended plan
    if (recommendedPlan.type === 'bundle') {
        // Find the service bundle card
        const bundleName = recommendedPlan.name.toLowerCase().replace(' bundle', '').replace(' ', '-');
        const bundleCard = document.querySelector(`.plan-card[data-plan="${bundleName}"]`);
        if (bundleCard) {
            bundleCard.classList.add('recommended');
        }
    } else {
        // Find the membership plan card
        const planCard = document.querySelector(`.plan-card[data-plan="${recommendedPlan.name.toLowerCase()}"]`);
        if (planCard) {
            planCard.classList.add('recommended');
        }
    }
}

function getRecommendedPlan(taskCount, timeHours) {
    const selectedTasksArray = Array.from(selectedTasks);
    
    if (taskCount <= 4 && timeHours <= 6) {
        return {
            ...membershipPlans.essentials,
            type: 'membership'
        };
    } else if (taskCount <= 8 && timeHours <= 12) {
        return {
            ...membershipPlans.executive,
            type: 'membership'
        };
    } else { 
        return {
            ...membershipPlans.platinum,
            type: 'membership'
        };
    }
}

function findTaskById(taskId) {
    for (const category of Object.values(taskData)) {
        const task = category.find(t => t.id === taskId);
        if (task) return task;
    }
    return null;
}

function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-question.active').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Mobile-specific enhancements
if (window.innerWidth <= 768) {
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('task-checkbox') && e.target.checked) {
            setTimeout(() => {
                const summarySection = document.querySelector('.savings-summary-section');
                if (summarySection) {
                    summarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    });
}

// Helper function to add footer
function addFooter(doc) {
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Generated by Jamiez Task & Savings Calculator', 20, pageHeight - 10);
}

function downloadReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let currentY = 20; // Starting Y position

    // Add logo and title
    doc.setFontSize(24);
    doc.setTextColor(102, 126, 234); // Jamiez blue
    doc.setFont('helvetica', 'bold'); // Correct bolding for title
    doc.text('Jamiez Task Report', 20, currentY);
    doc.setFont('helvetica', 'normal'); // Revert to normal after title
    currentY += 6; // Further reduced spacing for title
    
    // Add date
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, currentY);
    currentY += 15; // Further reduced spacing for date

    // --- Property Information Section ---
    const MIN_SPACE_FOR_SECTION = 10; // Further reduced minimum space
    const propertyInfoSectionEstHeight = 50; // Adjusted estimate
    if (doc.internal.pageSize.height - currentY < propertyInfoSectionEstHeight + MIN_SPACE_FOR_SECTION) {
        doc.addPage();
        addFooter(doc); // Add footer to new page
        currentY = 20;
    }
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50);
    doc.text('Property Information', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 10; // Further reduced spacing after section title

    // Get selected property type
    const propertyType = document.querySelector('input[name="property-type"]:checked');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Property Type:', 25, currentY);
    doc.setFont('helvetica', 'normal');
    if (propertyType) {
        doc.text(`${propertyType.value.charAt(0).toUpperCase() + propertyType.value.slice(1)}`, 65, currentY);
    } else {
        doc.text('N/A', 65, currentY);
    }
    currentY += 10; // Further reduced spacing for next line

    // Get selected lot types
    const lotTypes = Array.from(document.querySelectorAll('input[name="lot-type"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    doc.setFont('helvetica', 'bold');
    doc.text('Lot Types:', 25, currentY);
    doc.setFont('helvetica', 'normal');
    if (lotTypes.length > 0) {
        currentY += 6;
        lotTypes.forEach(type => {
            doc.text(`• ${type}`, 30, currentY);
            currentY += 6; // Further reduced spacing
        });
    } else {
        doc.text('N/A', 60, currentY);
        currentY += 6; 
    }
    currentY += 6; // Further reduced additional spacing

    // Get selected community features
    const communityFeatures = Array.from(document.querySelectorAll('input[name="community-features"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    doc.setFont('helvetica', 'bold');
    doc.text('Community Features:', 25, currentY);
    doc.setFont('helvetica', 'normal');
    if (communityFeatures.length > 0) {
        currentY += 6;
        communityFeatures.forEach(feature => {
            doc.text(`• ${feature}`, 30, currentY);
            currentY += 6; // Further reduced spacing
        });
    } else {
        doc.text('N/A', 90, currentY);
        currentY += 6; 
    }
    currentY += 6; // Further reduced additional spacing

    // Get selected pets & animals
    const petsAnimals = Array.from(document.querySelectorAll('input[name="pets-animals"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    doc.setFont('helvetica', 'bold');
    doc.text('Pets & Animals:', 25, currentY);
    doc.setFont('helvetica', 'normal');
    if (petsAnimals.length > 0) {
        currentY += 6;
        petsAnimals.forEach(item => {
            doc.text(`• ${item}`, 30, currentY);
            currentY += 6; // Further reduced spacing
        });
    } else {
        doc.text('N/A', 80, currentY);
        currentY += 4; 
    }
    currentY += 6; // Further reduced additional spacing

    // Get selected services & providers
    const servicesProviders = Array.from(document.querySelectorAll('input[name="services-providers"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    doc.setFont('helvetica', 'bold');
    doc.text('Current Services & Providers:', 25, currentY);
    doc.setFont('helvetica', 'normal');
    if (servicesProviders.length > 0) {
        currentY += 6;
        servicesProviders.forEach(service => {
            doc.text(`• ${service}`, 30, currentY);
            currentY += 20; // Further reduced spacing
        });
    } else {
        doc.text('N/A', 120, currentY);
        currentY += 6; 
    }
    currentY += 6; // Further reduced spacing after property info section

    // --- Selected Tasks Section ---
    if (doc.internal.pageSize.height - currentY < 20) { // Adjusted estimate space
        doc.addPage();
        addFooter(doc); // Add footer to new page
        currentY = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50);
    doc.text('Selected Tasks', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 10; // Further reduced spacing
    
    // Create table for selected tasks
    const selectedTasksArray = Array.from(selectedTasks);
    const tasksData = selectedTasksArray.map(taskId => {
        const task = findTaskById(taskId);
        return [
            task.name,
            task.time,
            task.cost,
            task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)
        ];
    });
    
    doc.autoTable({
        startY: currentY,
        head: [['Task', 'Time Estimate', 'Cost', 'Difficulty']],
        body: tasksData,
        theme: 'grid',
        headStyles: { fillColor: [102, 126, 234] },
        styles: { fontSize: 10 },
        columnStyles: {
            0: { cellWidth: 80 },
            1: { cellWidth: 40 },
            2: { cellWidth: 40 },
            3: { cellWidth: 30 }
        },
        didDrawPage: function(data) {
            addFooter(doc); // Add footer to every page the table spans
        }
    });

    // Update currentY after the table
    if (doc.lastAutoTable && typeof doc.lastAutoTable.finalY === 'number') {
        currentY = doc.lastAutoTable.finalY + 25; // Increased spacing after the table
    } else {
        // Fallback if autoTable didn't run or failed to set finalY
        currentY += (tasksData.length * 5) + 30; // Adjusted estimate table height + padding
    }

    // --- Summary and Savings Sections ---
    const estimatedSummarySavingsHeight = Math.max(5 * 10, 2 * 10) + 10; // Kept as before approx height
    const FOOTER_HEIGHT = 20;

    if (doc.internal.pageSize.height - currentY < estimatedSummarySavingsHeight + FOOTER_HEIGHT) {
        doc.addPage();
        addFooter(doc); // Add footer to new page
        currentY = 20;
    }

    // Add Summary section (left side)
    let summarySectionY = currentY;
    const summaryX = 20;
    doc.setFontSize(16);
    doc.setTextColor(50);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary', summaryX, summarySectionY);
    doc.setFont('helvetica', 'normal');
    summarySectionY += 10; // Further reduced spacing after section title

    // Calculate totals
    let totalTime = 0;
    let totalCost = 0;
    selectedTasksArray.forEach(taskId => {
        const task = findTaskById(taskId);
        if (task) {
            totalTime += task.timeHours;
            totalCost += task.costAmount;
        }
    });
    
    // Get recommended plan
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, totalTime);
    
    // Add summary details
    doc.setFontSize(12);
    doc.text([
        `Total Tasks Selected: ${selectedTasksArray.length}`,
        `Total Time Required: ${Math.round(totalTime)} hours`,
        `Estimated Market Cost: $${Math.round(totalCost).toLocaleString()}`,
        `Recommended Plan: ${recommendedPlan.name}`,
        `Plan Cost: $${isAnnualView ? recommendedPlan.annualPrice.toLocaleString() : recommendedPlan.monthlyPrice.toLocaleString()}/${isAnnualView ? 'year' : 'month'}`
    ], summaryX, summarySectionY, {lineHeightFactor: 2.0}); // Adjusted line spacing

    // Add savings calculation section (right side)
    let savingsSectionY = currentY; // Start at the same Y as summary for side-by-side
    const savingsX = doc.internal.pageSize.width / 2 + 10;
    doc.setFontSize(14);
    doc.setTextColor(40, 167, 69); // Green color
    doc.setFont('helvetica', 'bold');
    doc.text('Potential Savings', savingsX, savingsSectionY);
    doc.setFont('helvetica', 'normal');
    savingsSectionY += 10; // Further reduced spacing after section title
    
    const marketVsJamiezSavings = isAnnualView ? 
        (totalCost * 12) - recommendedPlan.annualPrice :
        totalCost - recommendedPlan.monthlyPrice;
    
    doc.setFontSize(12);
    doc.setTextColor(100); // Reset color for savings values
    doc.text([
        `Monthly Savings: $${Math.round(marketVsJamiezSavings / (isAnnualView ? 12 : 1)).toLocaleString()}`,
        `Annual Savings: $${Math.round(marketVsJamiezSavings).toLocaleString()}`
    ], savingsX, savingsSectionY, {lineHeightFactor: 1.7}); // Kept line spacing

    // Add footer to the very last page explicitly
    addFooter(doc);
    
    // Save the PDF
    doc.save('jamiez-task-report.pdf');
}
