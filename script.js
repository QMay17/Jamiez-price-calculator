// Task Data Structure based on Home Maintenance Checklist
const taskData = {
    'front-yard': [
        {
            id: 'address-numbers',
            name: 'Address numbers (visible & lit)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$60',
            costAmount: 50,
            frequency: 'quarterly',
            difficulty: 'easy',
            tooltip: 'Ensuring address numbers are clearly visible and properly illuminated'
        },
        {
            id: 'flower-beds-shrubs',
            name: 'Flower Beds / Decorative Shrubs',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$80',
            costAmount: 65,
            frequency: 'biweekly',
            difficulty: 'easy',
            tooltip: 'Pruning, weeding, and seasonal care for decorative landscaping elements'
        },
        {
            id: 'landscape-lighting',
            name: 'Landscape Lighting',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$60–$100',
            costAmount: 80,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Installation, repair, and maintenance of landscape lighting systems'
        },
        {
            id: 'lawn-irrigation',
            name: 'Lawn (irrigation system / sprinkler heads)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$100',
            costAmount: 75,
            frequency: 'weekly',
            difficulty: 'medium',
            tooltip: 'Regular lawn care including irrigation system maintenance and sprinkler head adjustments'
        },
        {
            id: 'mailbox-condition',
            name: 'Mailbox (condition, locking)',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$75',
            costAmount: 62.5,
            frequency: 'quarterly',
            difficulty: 'easy',
            tooltip: 'Mailbox condition assessment, lock maintenance, and security upgrades'
        },
        {
            id: 'smart-irrigation',
            name: 'Smart irrigation controller',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$120',
            costAmount: 97.5,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Installation, programming, and maintenance of smart irrigation controllers'
        },
        {
            id: 'trees-pruning',
            name: 'Trees (fruit, shade, pruning needs)',
            time: '2–4 hours',
            timeHours: 3,
            cost: '$150–$300',
            costAmount: 225,
            frequency: 'seasonal',
            difficulty: 'hard',
            tooltip: 'Professional tree care including pruning, health assessment, and seasonal maintenance'
        },
        {
            id: 'water-features',
            name: 'Water features (fountain, pond)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$150',
            costAmount: 115,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Water feature cleaning, pump maintenance, and seasonal care'
        }
    ],

    'side-yards': [
        {
            id: 'ac-condenser',
            name: 'A/C condenser units (clean, accessible)',
            time: '1 hour',
            timeHours: 1,
            cost: '$60–$100',
            costAmount: 80,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'AC condenser unit cleaning, accessibility checks, and basic maintenance'
        },
        {
            id: 'access-gate',
            name: 'Access gate working',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$60–$100',
            costAmount: 80,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Gate hardware adjustment, hinge lubrication, and repair services'
        },
        {
            id: 'hose-bibs',
            name: 'Hose bibs or spigots',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$125',
            costAmount: 100,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Hose bib replacement, repair, and winterization services'
        },
        {
            id: 'trash-recycling',
            name: 'Trash & recycling storage',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$60',
            costAmount: 50,
            frequency: 'weekly',
            difficulty: 'easy',
            tooltip: 'Cleanup and organization of trash and recycling storage areas'
        },
        {
            id: 'utility-meters',
            name: 'Utility meters (accessible, protected)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: 'N/A',
            costAmount: 0,
            frequency: 'quarterly',
            difficulty: 'easy',
            tooltip: 'Ensuring utility meters are accessible and protected (coordination with utility companies)'
        }
    ],

    'back-yard': [
        {
            id: 'deck-patio',
            name: 'Deck or Patio (clean/inspect)',
            time: '2–3 hours',
            timeHours: 2.5,
            cost: '$100–$300',
            costAmount: 200,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Deck cleaning, inspection for damage, and maintenance recommendations'
        },
        {
            id: 'drainage-issues',
            name: 'Drainage / pooling issues',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$200–$500+',
            costAmount: 350,
            frequency: 'quarterly',
            difficulty: 'hard',
            tooltip: 'Drainage system evaluation and solutions for water pooling problems'
        },
        {
            id: 'fence-damage',
            name: 'Fence (damage, latches)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$75–$200',
            costAmount: 137.5,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Fence damage repair, gate latch adjustment, and structural assessment'
        },
        {
            id: 'fire-pit',
            name: 'Fire Pit',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$150',
            costAmount: 112.5,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'Fire pit cleaning, safety inspection, and fuel management'
        },
        {
            id: 'fruit-trees',
            name: 'Fruit trees / garden (harvest)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$200',
            costAmount: 140,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'Fruit tree pruning, harvest coordination, and garden maintenance'
        },
        {
            id: 'misters-fans',
            name: 'Misters / Cooling Fans',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$100',
            costAmount: 75,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'Misting system cleaning, fan maintenance, and seasonal setup'
        },
        {
            id: 'outdoor-heaters',
            name: 'Outdoor heaters',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$75–$125',
            costAmount: 100,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'Outdoor heater cleaning, gas line inspection, and safety maintenance'
        },
        {
            id: 'outdoor-kitchen',
            name: 'Outdoor kitchen / BBQ',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'BBQ cleaning, outdoor kitchen maintenance, and gas line inspection'
        },
        {
            id: 'patio-cover',
            name: 'Patio Cover / Pergola',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$150–$500',
            costAmount: 325,
            frequency: 'quarterly',
            difficulty: 'hard',
            tooltip: 'Patio cover cleaning, structural inspection, and weather protection maintenance'
        },
        {
            id: 'pet-area',
            name: 'Pet damage / pet area',
            time: '1 hour',
            timeHours: 1,
            cost: '$50–$150',
            costAmount: 100,
            frequency: 'biweekly',
            difficulty: 'easy',
            tooltip: 'Pet area cleanup, damage assessment, and maintenance solutions'
        },
        {
            id: 'water-barrels',
            name: 'Water barrels / greywater',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$250',
            costAmount: 175,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Water barrel maintenance and greywater system management'
        }
    ],

    'outdoor-furniture': [
        {
            id: 'hot-tub-pool',
            name: 'Hot tub / Pool',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$150–$250/month',
            costAmount: 200,
            frequency: 'weekly',
            difficulty: 'hard',
            tooltip: 'Regular pool/hot tub cleaning, chemical balancing, and equipment maintenance'
        },
        {
            id: 'outdoor-furniture-clean',
            name: 'Outdoor furniture (clean)',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$100',
            costAmount: 75,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Cleaning and maintenance of patio furniture and cushions'
        },
        {
            id: 'storage-shed',
            name: 'Outdoor storage box / shed',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$50–$100',
            costAmount: 75,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Storage shed organization, weatherproofing, and maintenance'
        },
        {
            id: 'pool-safety',
            name: 'Pool safety fence / alarm',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$150–$300',
            costAmount: 225,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Pool safety fence inspection, alarm testing, and compliance checks'
        },
        {
            id: 'toys-swings',
            name: 'Toys / swing sets',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            costAmount: 175,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Swing set inspection, toy organization, and safety maintenance'
        },
        {
            id: 'umbrellas-shade',
            name: 'Umbrellas / shade structures',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$40–$80',
            costAmount: 60,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Umbrella cleaning, repair, and shade structure maintenance'
        }
    ],

    'garage': [
        {
            id: 'electrical-lighting',
            name: 'Electrical outlets / lighting',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$75–$150',
            costAmount: 112.5,
            frequency: 'quarterly',
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
            frequency: 'quarterly',
            difficulty: 'hard',
            tooltip: 'EV charger installation prep, electrical assessment, and permit coordination'
        },
        {
            id: 'garage-laundry',
            name: 'Laundry appliances (garage)',
            time: '1 hour',
            timeHours: 1,
            cost: '$100–$200',
            costAmount: 150,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Garage-based laundry appliance maintenance and utility connections'
        },
        {
            id: 'overhead-storage',
            name: 'Overhead storage / racks',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            costAmount: 175,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Overhead storage rack installation and garage organization systems'
        },
        {
            id: 'pest-check',
            name: 'Pest activity check',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$100–$150',
            costAmount: 125,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Pest activity assessment and preventive control measures'
        },
        {
            id: 'tools-storage',
            name: 'Tools & equipment storage',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$50–$150',
            costAmount: 100,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Tool organization systems and equipment storage optimization'
        }
    ],

    'exterior': [
        {
            id: 'chimney-flue',
            name: 'Chimney / Flue',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$150–$300',
            costAmount: 225,
            frequency: 'seasonal',
            difficulty: 'hard',
            tooltip: 'Chimney inspection, flue cleaning coordination, and safety assessment'
        },
        {
            id: 'exterior-cameras',
            name: 'Exterior cameras / motion lights',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$100–$250',
            frequency: 'monthly',
            costAmount: 175,
            difficulty: 'medium',
            tooltip: 'Security camera cleaning, motion light testing, and system maintenance'
        },
        {
            id: 'gutters-downspouts',
            name: 'Gutters & Downspouts',
            time: '1.5–2 hours',
            timeHours: 1.75,
            cost: '$60–$120',
            costAmount: 90,
            frequency: 'seasonal',
            difficulty: 'medium',
            tooltip: 'Gutter cleaning, debris removal, and downspout flow testing'
        },
        {
            id: 'roof-inspection',
            name: 'Roof (age, material, visible damage)',
            time: '1 hour',
            timeHours: 1,
            cost: '$150–$300',
            costAmount: 225,
            frequency: 'seasonal',
            difficulty: 'hard',
            tooltip: 'Professional roof inspection for age, material condition, and visible damage'
        },
        {
            id: 'siding-paint',
            name: 'Siding / Stucco / Paint condition',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$200–$500',
            costAmount: 350,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Siding inspection, stucco assessment, and paint condition evaluation'
        },
        {
            id: 'skylights-solar',
            name: 'Skylights / Solar tubes',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$200',
            costAmount: 150,
            frequency: 'quarterly',
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
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Solar panel visual inspection, cleaning coordination, and performance monitoring'
        },
        {
            id: 'wifi-extender',
            name: 'Wi-Fi signal / mesh extender',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$300',
            costAmount: 200,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Wi-Fi signal optimization, mesh extender setup, and network troubleshooting'
        },
        {
            id: 'windows-screens',
            name: 'Windows / Screens',
            time: '1–2 hours',
            timeHours: 1.5,
            cost: '$80–$150',
            costAmount: 115,
            frequency: 'quarterly',
            difficulty: 'easy',
            tooltip: 'Window cleaning, screen repair, and weatherstripping maintenance'
        }
    ],

    'utilities': [
        {
            id: 'backup-generator',
            name: 'Backup generator',
            time: '1 hour',
            timeHours: 1,
            cost: '$150–$300',
            costAmount: 225,
            frequency: 'seasonal',
            difficulty: 'hard',
            tooltip: 'Generator maintenance, fuel management, and operational testing'
        },
        {
            id: 'water-system',
            name: 'Drinking water system (filtration, softener)',
            time: '1 hour',
            timeHours: 1,
            cost: '$100–$200',
            costAmount: 150,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Water filter replacement, softener maintenance, and system testing'
        },
        {
            id: 'firewood-storage',
            name: 'Firewood storage',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            frequency: 'seasonal',
            difficulty: 'easy',
            tooltip: 'Firewood stacking, storage organization, and pest prevention'
        },
        {
            id: 'irrigation-controller',
            name: 'Irrigation controller (manual, smart)',
            time: '1 hour',
            timeHours: 1,
            cost: '$75–$150',
            costAmount: 112.5,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Irrigation timer programming, seasonal adjustments, and system optimization'
        },
        {
            id: 'propane-tank',
            name: 'Propane tank (BBQ, heater, fireplace)',
            time: '0.5 hour',
            timeHours: 0.5,
            cost: '$50–$100',
            costAmount: 75,
            frequency: 'monthly',
            difficulty: 'easy',
            tooltip: 'Propane tank exchange, connection inspection, and safety checks'
        },
        {
            id: 'rainwater-barrels',
            name: 'Rainwater harvesting barrels',
            time: '0.5–1 hour',
            timeHours: 0.75,
            cost: '$100–$200',
            costAmount: 150,
            frequency: 'quarterly',
            difficulty: 'medium',
            tooltip: 'Rainwater barrel cleaning, system maintenance, and mosquito prevention'
        }
        // {
        //     id: 'septic-sewer',
        //     name: 'Septic system or city sewer',
        //     time: '0.5 hour',
        //     timeHours: 0.5,
        //     cost: '$200–$500',
        //     costAmount: 350,
        //     frequency: 'seasonal',
        //     difficulty: 'hard',
        //     tooltip: 'Septic system inspection coordination and sewer line maintenance'
        // }
    ],

    'pet-care': [
        {
            id: 'dog-walking',
            name: 'Dog Walking & Exercise',
            time: '0.5-1 hours',
            timeHours: 0.75,
            cost: '$25-$50',
            costAmount: 37.5,
            frequency: 'weekly',
            difficulty: 'easy',
            tooltip: 'Regular dog walking service with exercise and socialization'
        },
        {
            id: 'pet-grooming',
            name: 'Pet Grooming & Care',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$50-$100',
            costAmount: 75,
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Professional pet grooming coordination and basic care services'
        },
        {
            id: 'pet-sitting',
            name: 'Pet Sitting & Care',
            time: '0.5-1 hours',
            timeHours: 0.75,
            cost: '$25-$50',
            costAmount: 37.5,
            frequency: 'weekly',
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
            frequency: 'monthly',
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
            frequency: 'monthly',
            difficulty: 'medium',
            tooltip: 'Locate signs of infestation, clean affected areas, and set traps or deterrents to prevent recurrence.'
        },
        {
            id: 'skunk-raccoon',
            name: 'Skunk or raccoon sightings',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$200-$500',
            costAmount: 350,
            frequency: 'biweekly',
            difficulty: 'hard',
            tooltip: 'Inspect for entry points and signs of activity; block access or arrange for humane wildlife removal.'
        },
        {
            id: 'spider-webs-nests',
            name: 'Spider webs / nests',
            time: '0.5-1 hours',
            timeHours: 0.75,
            cost: '$75-$150',
            costAmount: 125,
            frequency: 'biweekly',
            difficulty: 'medium',
            tooltip: 'Remove webs and nests from corners, eaves, and fixtures to maintain a clean and pest-free space.'
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
        'trees-pruning', 'ac-condenser', 'misters-fans',
        'fruit-trees',  'roof-inspection', 'gutters-downspouts', 
        'chimney-flue', 'backup-generator',// 'septic-sewer',
        'fire-pit',  'outdoor-heaters',  'firewood-storage'
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
        tasks: ['trees-pruning', 'ac-condenser', 'misters-fans',
        'fruit-trees',  'roof-inspection', 'gutters-downspouts', 
        'chimney-flue', 'backup-generator',// 'septic-sewer',
        'fire-pit',  'outdoor-heaters',  'firewood-storage'],
        maxTasks: 12
    }
};

// Time Saved Benefits Data from CSV
const timeSavedBenefitsData = {
    "Busy Professionals with Kids": {
        1: "Enough time to sit down for dinner with your kids and hear about their day.",
        2: "That's a slow afternoon at the park with your kids—no multitasking, just play.",
        3: "Time for a family grocery run and ice cream after.",
        4: "You could finally tackle the toy closet—or help with your child's school project.",
        5: "Time to plan and have a real date night with your partner.",
        6: "Enough time to do school drop-off, grab a coffee, and actually take a deep breath.",
        8: "One full Saturday where you don't have to do anything—just be with your family.",
        10: "Time to spend a whole day at a museum or the zoo with your kids.",
        12: "Join your child's classroom for a reading day—or finally schedule your own doctor's appointment.",
        15: "Get away for a real weekend—no packing panic, no chaos.",
        20: "Take control of your month—rest, reset, or even start your own project.",
        40: "That's the time to finally launch your side hustle—or spend a full week unplugged with family."
    },
    "Busy Professionals without Kids": {
        1: "Time to enjoy a morning coffee without rushing out the door.",
        2: "Catch a movie in theaters or take yourself out for brunch.",
        3: "Join a workout class and still have time to unwind.",
        4: "Go hiking, read a few chapters, and cook a nice dinner for yourself.",
        5: "Start that hobby you've been putting off—pottery, photography, you name it.",
        6: "Deep clean your space and spend the evening guilt-free.",
        8: "A personal retreat day: journal, take a class, make something.",
        10: "Take a long walk, meal prep for the week, and have a phone-free night.",
        12: "Plan a weekend trip, or just rest up from a long few weeks.",
        15: "Take a weekend workshop or writing retreat.",
        20: "Use that time to train for a race, write your blog, or learn a new skill.",
        40: "Take a long vacation without feeling like life will unravel while you're gone."
    },
    "Retired Individuals": {
        1: "Just enough time for a relaxing neighborhood walk and a chat with a friend.",
        2: "Attend a craft or gardening class at the community center.",
        3: "Visit the library and flip through the magazines you used to love.",
        4: "Drive to your favorite nature spot and enjoy the whole afternoon there.",
        5: "Call your old college friend and catch up for real—not just texts.",
        6: "Go through a memory box or photo album without feeling overwhelmed.",
        8: "Join a community outing, then relax with a good book and tea.",
        10: "Reorganize your living space with no rush or physical strain.",
        12: "Plant a small garden and tend to it regularly.",
        15: "Go visit your grandchildren and stay for the whole weekend.",
        20: "Join a local club, learn something new, and still rest on weekends.",
        40: "Start a memoir, travel to a new place, or finally sort and preserve your legacy keepsakes."
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

    // --- MULTI-VEHICLE SUPPORT ---
    const vehicleFormsContainer = document.getElementById('vehicle-forms');
    const addVehicleBtn = document.getElementById('add-vehicle-btn');
    let vehicleCount = 0;
    const maxVehicles = 3;

    // Template for a vehicle form (as HTML string)
    function getVehicleFormHTML(index) {
        return `
        <div class="vehicle-form" data-vehicle-index="${index}">
            <div class="survey-categories">
                <!-- Basic Vehicle Information -->
                <div class="survey-card">
                    <div class="survey-header">
                        <div class="survey-icon">
                            <i class="fas fa-car"></i>
                        </div>
                        <div class="survey-info">
                            <h3>🚘 Basic Vehicle Information</h3>
                        </div>
                    </div>
                    <div class="survey-content">
                        <div class="input-grid">
                            <div class="question-group">
                                <label class="question-label" for="make_${index}">Make</label>
                                <input type="text" id="make_${index}" name="make_${index}" class="text-input" placeholder="e.g., Toyota, Honda, Ford">
                                <div class="error-message">Please enter your vehicle's make</div>
                            </div>
                            <div class="question-group">
                                <label class="question-label" for="model_${index}">Model</label>
                                <input type="text" id="model_${index}" name="model_${index}" class="text-input" placeholder="e.g., Camry, Civic, F-150">
                                <div class="error-message">Please enter your vehicle's model</div>
                            </div>
                            <div class="question-group">
                                <label class="question-label" for="year_${index}">Year</label>
                                <input type="number" id="year_${index}" name="year_${index}" class="number-input" min="1990" max="2025" placeholder="2020">
                                <div class="error-message">Please enter a valid year</div>
                            </div>
                            <div class="question-group">
                                <label class="question-label" for="mileage_${index}">Mileage</label>
                                <input type="number" id="mileage_${index}" name="mileage_${index}" class="number-input" min="0" placeholder="75000">
                                <div class="error-message">Please enter your vehicle's mileage</div>
                            </div>
                        </div>
                        <div class="question-group" style="display: flex; align-items: center; gap: 16px;">
                            <label class="question-label" for="usage_frequency_${index}" style="margin-bottom:0;">How often do you use your vehicle?</label>
                            <select id="usage_frequency_${index}" name="usage_frequency_${index}" class="text-input" style="max-width:220px; margin-left: 8px;">
                                <option value="" disabled selected>Select frequency</option>
                                <option value="daily">Daily</option>
                                <option value="few_times_week">A few times a week</option>
                                <option value="few_times_month">A few times a month</option>
                                <option value="rarely">Rarely</option>
                            </select>
                        </div>
                    </div>
                </div>
                <!-- Maintenance Awareness -->
                <div class="survey-card">
                    <div class="survey-header">
                        <div class="survey-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <div class="survey-info">
                            <h3>🛠 Maintenance Awareness</h3>
                        </div>
                    </div>
                    <div class="survey-content">
                        <div class="question-group">
                            <label class="question-label">When was your last oil change?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="1_month">
                                    1 Month
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="2_months">
                                    2 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="3_months">
                                    3 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="6_months">
                                    6 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="1_year">
                                    1 Year+
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="oil_change_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">When were your tires last rotated?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="1_month">
                                    1 Month
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="2_months">
                                    2 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="3_months">
                                    3 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="6_months">
                                    6 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="1_year">
                                    1 Year+
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tire_rotation_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">Is your car showing any warning lights on the dashboard?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="warning_lights_${index}" value="yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="warning_lights_${index}" value="no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="warning_lights_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">Does your car make any unusual noises?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="unusual_noises_${index}" value="yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="unusual_noises_${index}" value="no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="unusual_noises_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">Does your car have any performance issues?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="performance_issues_${index}" value="yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="performance_issues_${index}" value="no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="performance_issues_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">Have you had any recent repairs or part replacements?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="recent_repairs_${index}" value="yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="recent_repairs_${index}" value="no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="recent_repairs_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Routine Care -->
                <div class="survey-card">
                    <div class="survey-header">
                        <div class="survey-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <div class="survey-info">
                            <h3>🧾 Routine Care</h3>
                        </div>
                    </div>
                    <div class="survey-content">
                        <div class="question-group">
                            <label class="question-label">Do you have a preferred mechanic or auto shop?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="preferred_mechanic_${index}" value="yes" class="mechanic-yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="preferred_mechanic_${index}" value="no" class="mechanic-no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="preferred_mechanic_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">When is your next scheduled maintenance (if any)?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="instantly">
                                    Needed Now
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="1_month">
                                    In 1 Month
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="2_months">
                                    In 2 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="3_months">
                                    In 3 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="6_months">
                                    In 6 Months
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="next_maintenance_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                        <div class="question-group">
                            <label class="question-label">Would you like help keeping track of future checkups and reminders?</label>
                            <div class="toggle-group">
                                <label class="toggle-option">
                                    <input type="radio" name="tracking_help_${index}" value="yes">
                                    Yes
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tracking_help_${index}" value="no">
                                    No
                                </label>
                                <label class="toggle-option">
                                    <input type="radio" name="tracking_help_${index}" value="not-sure">
                                    I'm not sure
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${index > 1 ? '<button type="button" class="remove-vehicle-btn">Remove Vehicle</button>' : ''}
        </div>
        `;
    }

    function setupMechanicToggleForForm(form) {
        const yesRadio = form.querySelector('.mechanic-yes');
        const noRadio = form.querySelector('.mechanic-no');
        const details = form.querySelector('.mechanic-details');
        if (!yesRadio || !noRadio || !details) return;
        function toggle() {
            if (yesRadio.checked) {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        }
        yesRadio.addEventListener('change', toggle);
        noRadio.addEventListener('change', toggle);
    }

    function setupRemoveButtonForForm(form) {
        const removeBtn = form.querySelector('.remove-vehicle-btn');
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                form.remove();
                vehicleCount--;
                if (addVehicleBtn) addVehicleBtn.disabled = false;
                updateRemoveButtons();
            });
        }
    }

    function updateRemoveButtons() {
        // Only show remove button for forms after the first
        const forms = vehicleFormsContainer.querySelectorAll('.vehicle-form');
        forms.forEach((form, idx) => {
            const btn = form.querySelector('.remove-vehicle-btn');
            if (btn) {
                btn.style.display = idx === 0 ? 'none' : 'inline-block';
            }
        });
    }

    function addVehicleForm() {
        if (vehicleCount >= maxVehicles) return;
        const index = vehicleCount + 1;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = getVehicleFormHTML(index);
        const form = wrapper.firstElementChild;
        vehicleFormsContainer.appendChild(form);
        setupMechanicToggleForForm(form);
        setupRemoveButtonForForm(form);
        vehicleCount++;
        if (vehicleCount >= maxVehicles && addVehicleBtn) {
            addVehicleBtn.disabled = true;
        }
        updateRemoveButtons();
    }

    // Initial setup: render the first vehicle form
    addVehicleForm();

    // Add vehicle button click
    if (addVehicleBtn) {
        addVehicleBtn.addEventListener('click', function() {
            addVehicleForm();
        });
    }
});

function initializeCalculator() {
    // Add animation classes
    document.querySelector('.calculator-container').classList.add('fade-in');
    
    // Initialize FAQ functionality
    setupFAQ();

    // Load personal lines for times saved
    loadTimeSavedBenefits();
}

function setupEventListeners() {
    // Get to Know You Better form listeners 
    setupKnowYouListeners();
    setupCategoryToggles();

    // Automobile section listeners
    setupAutomobileListeners();
    setupAutomobileToggle();

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

function setupAutomobileListeners() {
    // No-op for dynamic vehicle forms
}

function setupAutomobileToggle() {
    const automobileHeader = document.querySelector('.automobile-section .section-header');
    const automobileContent = document.getElementById('automobile-content');
    const automobileSection = document.querySelector('.automobile-section');

    function toggleAutomobileSection() {
        if (!automobileContent) return;
        const isActive = automobileContent.classList.contains('active');
        if (isActive) {
            automobileContent.classList.remove('active');
            if (automobileSection) automobileSection.classList.remove('expanded');
        } else {
            automobileContent.classList.add('active');
            if (automobileSection) automobileSection.classList.add('expanded');
        }
    }

    // Hide by default (ensure .active is not set)
    if (automobileContent) automobileContent.classList.remove('active');
    if (automobileSection) automobileSection.classList.remove('expanded');

    // Add click listener to the entire header (green box)
    if (automobileHeader) {
        automobileHeader.addEventListener('click', function(e) {
            toggleAutomobileSection();
        });
    }
}

function setupCategoryToggles() {
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const tasksContainer = document.getElementById(`${category}-tasks`);
            const toggle = this.querySelector('.category-toggle');
            if (tasksContainer && toggle) {
                const isActive = tasksContainer.classList.contains('active');
                if (isActive) {
                    tasksContainer.classList.remove('active');
                    toggle.classList.remove('active');
                } else {
                    tasksContainer.classList.add('active');
                    toggle.classList.add('active');
                }
            }
        });
    });
}

// Helper to open tab if a task is selected, but never close automatically
function updateCategoryTabState(category) {
    const tasksContainer = document.getElementById(`${category}-tasks`);
    const header = document.querySelector(`.category-header[data-category="${category}"]`);
    const toggle = header ? header.querySelector('.category-toggle') : null;
    if (!tasksContainer || !toggle) return;
    const checked = tasksContainer.querySelectorAll('.task-checkbox:checked').length > 0;
    if (checked) {
        tasksContainer.classList.add('active');
        toggle.classList.add('active');
    }
    // Do not close tab if no tasks are checked
}

function updateCategoryVisibility() {
    // Get all category cards
    document.querySelectorAll('.category-card').forEach(categoryCard => {
        const categoryHeader = categoryCard.querySelector('.category-header');
        const categoryTasks = categoryCard.querySelector('.category-tasks');
        const categoryToggle = categoryCard.querySelector('.category-toggle');
        
        if (!categoryTasks || !categoryToggle) return;
        
        // Check if any tasks in this category are selected
        const checkboxes = categoryTasks.querySelectorAll('.task-checkbox');
        const hasSelectedTasks = Array.from(checkboxes).some(checkbox => checkbox.checked);
        
        if (hasSelectedTasks) {
            // Keep category open if it has selected tasks
            categoryTasks.classList.add('active');
            categoryToggle.classList.add('active');
        } else {
            // Close category if no tasks are selected
            categoryTasks.classList.remove('active');
            categoryToggle.classList.remove('active');
        }
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
                        <div class="task-frequency frequency-${task.frequency}">
                            <i class="fas fa-calendar-alt"></i>
                            ${task.frequency.charAt(0).toUpperCase() + task.frequency.slice(1)}
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
                // Update category visibility based on selected tasks
                updateCategoryVisibility();
                updateSummary();
            });
        });
        // On load, ensure tab state matches any pre-selected tasks
        updateCategoryVisibility();
    });
}

function closeAllCategoryTabs() {
    document.querySelectorAll('.category-tasks').forEach(container => {
        container.classList.remove('active');
    });
    document.querySelectorAll('.category-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
}

function updateAllCategoryTabStates() {
    Object.keys(taskData).forEach(category => {
        updateCategoryTabState(category);
    });
}

function addBundle(bundleName) {
    const bundleTasks = bundles[bundleName];
    if (!bundleTasks) return;

    const bundleBtn = document.querySelector(`.bundle-btn[data-bundle="${bundleName}"]`);
    const isActive = bundleBtn && bundleBtn.classList.contains('active');

    // If the bundle is already active, deselect it (toggle off)
    if (isActive) {
        selectedTasks.clear();
        selectedBundles.clear();
        // Uncheck all task checkboxes
        document.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.checked = false;
            checkbox.closest('.task-item').classList.remove('selected');
        });
        // Remove active class from all bundle buttons
        document.querySelectorAll('.bundle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        updateCategoryVisibility();
        updateSummary();
        if (typeof updateBundleButtonStates === 'function') {
            updateBundleButtonStates();
        }
        return;
    }

    // Otherwise, select the bundle as before
    selectedTasks.clear();
    selectedBundles.clear();
    // Uncheck all task checkboxes
    document.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('.task-item').classList.remove('selected');
    });
    // Remove active class from all bundle buttons
    document.querySelectorAll('.bundle-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    selectedBundles.add(bundleName);
    bundleTasks.forEach(taskId => {
        selectedTasks.add(taskId);
        const checkbox = document.getElementById(taskId);
        if (checkbox) {
            checkbox.checked = true;
            checkbox.closest('.task-item').classList.add('selected');
        }
    });
    if (bundleBtn) {
        bundleBtn.classList.add('active');
    }
    updateCategoryVisibility();
    updateSummary();
    if (typeof updateBundleButtonStates === 'function') {
        updateBundleButtonStates();
    }
}

// Helper function to calculate frequency-adjusted hours and costs
function calculateFrequencyAdjustedValues(selectedTasksArray) {
    let monthlyHours = 0;
    let annualHours = 0;
    let monthlyCost = 0;
    let annualCost = 0;
    
    selectedTasksArray.forEach(taskId => {
        const task = findTaskById(taskId);
        if (task) {
            switch(task.frequency) {
                case 'weekly':
                    monthlyHours += task.timeHours * 4; // 4 weeks per month
                    annualHours += task.timeHours * 52; // 52 weeks per year
                    monthlyCost += task.costAmount * 4;
                    annualCost += task.costAmount * 52;
                    break;
                case 'biweekly':
                    monthlyHours += task.timeHours * 2; // 2 times per month
                    annualHours += task.timeHours * 26; // 26 times per year
                    monthlyCost += task.costAmount * 2;
                    annualCost += task.costAmount * 26;
                    break;
                case 'monthly':
                    monthlyHours += task.timeHours;
                    annualHours += task.timeHours * 12;
                    monthlyCost += task.costAmount;
                    annualCost += task.costAmount * 12;
                    break;
                case 'quarterly':
                    monthlyHours += task.timeHours / 3; // Average per month
                    annualHours += task.timeHours * 4;
                    monthlyCost += task.costAmount / 3;
                    annualCost += task.costAmount * 4;
                    break;
                case 'seasonal':
                    // Seasonal tasks are done once per year
                    annualHours += task.timeHours;
                    annualCost += task.costAmount;
                    // For monthly average, divide by 12
                    monthlyHours += task.timeHours / 12;
                    monthlyCost += task.costAmount / 12;
                    break;
                default:
                    // Default to monthly if no frequency specified
                    monthlyHours += task.timeHours;
                    annualHours += task.timeHours * 12;
                    monthlyCost += task.costAmount;
                    annualCost += task.costAmount * 12;
                    break;
            }
        }
    });
    
    return {
        monthlyHours,
        annualHours,
        monthlyCost,
        annualCost
    };
}

function updateSummary() {
    const selectedTasksArray = Array.from(selectedTasks);
    
    // Calculate frequency-adjusted totals
    const frequencyAdjusted = calculateFrequencyAdjustedValues(selectedTasksArray);
    
    // Use the appropriate values based on current view
    const totalDIYTime = isAnnualView ? frequencyAdjusted.annualHours : frequencyAdjusted.monthlyHours;
    const totalMarketCost = isAnnualView ? frequencyAdjusted.annualCost : frequencyAdjusted.monthlyCost;
    const totalDIYCost = isAnnualView ? (frequencyAdjusted.monthlyHours * 25 * 12) : (frequencyAdjusted.monthlyHours * 25); // $25/hour for DIY supplies/tools

    // Find recommended plan
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, frequencyAdjusted.monthlyHours);
    const planCost = isAnnualView ? recommendedPlan.annualPrice : recommendedPlan.monthlyPrice;
    
    // Calculate savings
    const marketVsJamiezSavings = totalMarketCost - planCost;
    const diyVsJamiezSavings = (totalDIYCost + (totalDIYTime * 25)) - planCost; // Adding time value at $25/hour
    
    const bestSavings = Math.max(marketVsJamiezSavings, 0);

    // Update comparison table
    updateComparisonTable(
        totalDIYTime,
        totalDIYCost,
        totalMarketCost,
        planCost,
        selectedTasksArray.length,
        recommendedPlan,
        frequencyAdjusted
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

    // Display time saved benefits
    displayTimeSavedBenefits(frequencyAdjusted.monthlyHours);
}

function updateComparisonTable(diyTime, diyCost, marketCost, jamiezCost, taskCount, recommendedPlan, frequencyAdjusted) {
    const timeUnit = isAnnualView ? 'year' : 'month';
    
    // Format time values (already adjusted for frequency)
    const formatTime = (hours) => {
        const totalHours = Math.round(hours);
        return `${totalHours} hours/${timeUnit}`;
    };
    
    // Format cost values (already adjusted for frequency)
    const formatCost = (cost) => {
        const totalCost = Math.round(cost);
        return `$${totalCost.toLocaleString()}`;
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
    if (jamiezCostEl) jamiezCostEl.textContent = `$${jamiezCost.toLocaleString()}`;
    
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
    
    const savingsLabelEl = document.querySelector('.savings-label');
    const savingsValueEl = document.querySelector('.savings-value');
    const timeLabelEl = document.querySelector('.time-label');
    const timeValueEl = document.querySelector('.time-value');
    
    if (savingsLabelEl) savingsLabelEl.textContent = `Potential ${period} Savings`;
    if (savingsValueEl) savingsValueEl.textContent = savings > 0 ? `$${Math.round(savings).toLocaleString()}` : '$0';
    if (timeLabelEl) timeLabelEl.textContent = 'Time Saved';
    if (timeValueEl) timeValueEl.textContent = `${Math.round(timeHours)} hours/${period.toLowerCase()}`;
    
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

function getRecommendedPlan(taskCount, monthlyHours) {
    const selectedTasksArray = Array.from(selectedTasks);
    
    // Calculate frequency-adjusted values for plan recommendation
    const frequencyAdjusted = calculateFrequencyAdjustedValues(selectedTasksArray);
    
    // Check if any bundles are selected
    if (selectedBundles.size > 0) {
        const selectedBundle = Array.from(selectedBundles)[0];
        
        // Compare with appropriate service bundle
        if (selectedBundle === 'pet-parents') {
            return {
                ...serviceBundles['pet-parents'],
                type: 'bundle'
            };
        } else if (selectedBundle === 'seasonal-prep') {
            return {
                ...serviceBundles['seasons-greetings'],
                type: 'bundle'
            };
        }
    }
    
    // Default membership plan logic based on adjusted monthly hours
    if (taskCount <= 4 && frequencyAdjusted.monthlyHours <= 6) {
        return {
            ...membershipPlans.essentials,
            type: 'membership',
            calculatedMonthlyCost: frequencyAdjusted.monthlyCost,
            calculatedAnnualCost: frequencyAdjusted.annualCost,
            monthlyHours: frequencyAdjusted.monthlyHours,
            annualHours: frequencyAdjusted.annualHours
        };
    } else if (taskCount <= 8 && frequencyAdjusted.monthlyHours <= 12) {
        return {
            ...membershipPlans.executive,
            type: 'membership',
            calculatedMonthlyCost: frequencyAdjusted.monthlyCost,
            calculatedAnnualCost: frequencyAdjusted.annualCost,
            monthlyHours: frequencyAdjusted.monthlyHours,
            annualHours: frequencyAdjusted.annualHours
        };
    } else { 
        return {
            ...membershipPlans.platinum,
            type: 'membership',
            calculatedMonthlyCost: frequencyAdjusted.monthlyCost,
            calculatedAnnualCost: frequencyAdjusted.annualCost,
            monthlyHours: frequencyAdjusted.monthlyHours,
            annualHours: frequencyAdjusted.annualHours
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
    let currentY = 20;

    // --- Contact & Household Info Section ---
    const contactName = document.getElementById('contact_name')?.value || '';
    const contactPhone = document.getElementById('contact_phone')?.value || '';
    const contactEmail = document.getElementById('contact_email')?.value || '';
    const contactStreet = document.getElementById('contact_street')?.value || '';
    const contactCity = document.getElementById('contact_city')?.value || '';
    const contactState = document.getElementById('contact_state')?.value || '';
    const contactZip = document.getElementById('contact_zip')?.value || '';
    const householdSize = document.getElementById('household_size')?.value || '';

    // Only add section if at least one field is filled
    if (
        contactName || contactPhone || contactEmail ||
        contactStreet || contactCity || contactState || contactZip || householdSize
    ) {
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(50);
        doc.text('Contact & Household Info', 20, currentY);
        doc.setFont('helvetica', 'normal');
        currentY += 7;

        const contactInfoData = [
            ['Name', contactName || 'N/A'],
            ['Phone', contactPhone || 'N/A'],
            ['Email', contactEmail || 'N/A'],
            ['Street Address', contactStreet || 'N/A'],
            ['City', contactCity || 'N/A'],
            ['State', contactState || 'N/A'],
            ['Zip Code', contactZip || 'N/A'],
            ['Household Size', householdSize || 'N/A']
        ];

        doc.autoTable({
            startY: currentY,
            head: [['Field', 'Value']],
            body: contactInfoData,
            theme: 'grid',
            styles: {
                font: 'helvetica',
                fontSize: 12,
                cellPadding: 4,
                textColor: [50, 50, 50]
            },
            headStyles: {
                fillColor: [102, 126, 234],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            columnStyles: {
                0: { fontStyle: 'bold', cellWidth: 50 },
                1: { cellWidth: 'auto' }
            },
            margin: { left: 20, right: 20 },
            didDrawPage: function(data) {
                currentY = data.cursor.y;
            }
        });
        currentY += 15;
    }

    // --- Property Information Section ---
    const propertyInfoSectionEstHeight = 50;
    if (doc.internal.pageSize.height - currentY < propertyInfoSectionEstHeight + 10) {
        currentY = 20;
    }
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50);
    doc.text('Property Information', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 7;

    // Gather property info
    const propertyType = document.querySelector('input[name="property-type"]:checked');
    const lotTypes = Array.from(document.querySelectorAll('input[name="lot-type"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    const communityFeatures = Array.from(document.querySelectorAll('input[name="community-features"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    const petsAnimals = Array.from(document.querySelectorAll('input[name="pets-animals"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    const servicesProviders = Array.from(document.querySelectorAll('input[name="services-providers"]:checked'))
        .map(checkbox => checkbox.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

    const propertyInfoData = [
        ['Property Type', propertyType ? (propertyType.value.charAt(0).toUpperCase() + propertyType.value.slice(1)) : 'N/A'],
        ['Lot Types', lotTypes.length > 0 ? lotTypes.join(', ') : 'N/A'],
        ['Community Features', communityFeatures.length > 0 ? communityFeatures.join(', ') : 'N/A'],
        ['Pets & Animals', petsAnimals.length > 0 ? petsAnimals.join(', ') : 'N/A'],
        ['Services & Providers', servicesProviders.length > 0 ? servicesProviders.join(', ') : 'N/A']
    ];

    doc.autoTable({
        startY: currentY,
        head: [['Field', 'Value']],
        body: propertyInfoData,
        theme: 'grid',
        styles: {
            font: 'helvetica',
            fontSize: 12,
            cellPadding: 4,
            textColor: [50, 50, 50]
        },
        headStyles: {
            fillColor: [102, 126, 234],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 50 },
            1: { cellWidth: 'auto' }
        },
        margin: { left: 20, right: 20 },
        didDrawPage: function(data) {
            currentY = data.cursor.y;
        }
    });
    currentY += 15;

    // --- Vehicle Information Section (AutoCare) ---
    // Always start on a new page after Property & Lot Type
    doc.addPage();
    currentY = 20;
    const vehicleForms = document.querySelectorAll('.vehicle-form');
    if (vehicleForms.length > 0) {
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(50);
        doc.text('Vehicle Information', 20, currentY);
        doc.setFont('helvetica', 'normal');
        currentY += 10;
        vehicleForms.forEach((form, idx) => {
            if (idx > 0) {
                doc.addPage();
                currentY = 20;
            }
            const index = form.getAttribute('data-vehicle-index');
            // Get values for this vehicle
            const make = form.querySelector(`#make_${index}`)?.value || 'N/A';
            const model = form.querySelector(`#model_${index}`)?.value || 'N/A';
            const year = form.querySelector(`#year_${index}`)?.value || 'N/A';
            const mileage = form.querySelector(`#mileage_${index}`)?.value || 'N/A';
            const usageFrequency = form.querySelector(`#usage_frequency_${index}`)?.value || 'N/A';
            const purpose = form.querySelector(`input[name="purpose_${index}"]:checked`)?.value || 'N/A';
            // Maintenance Awareness
            const oilChange = form.querySelector(`input[name="oil_change_${index}"]:checked`)?.value || 'N/A';
            const tireRotation = form.querySelector(`input[name="tire_rotation_${index}"]:checked`)?.value || 'N/A';
            const warningLights = form.querySelector(`input[name="warning_lights_${index}"]:checked`)?.value || 'N/A';
            const unusualNoises = form.querySelector(`input[name="unusual_noises_${index}"]:checked`)?.value || 'N/A';
            const performanceIssues = form.querySelector(`input[name="performance_issues_${index}"]:checked`)?.value || 'N/A';
            const recentRepairs = form.querySelector(`input[name="recent_repairs_${index}"]:checked`)?.value || 'N/A';
            // Routine Care
            const preferredMechanic = form.querySelector(`input[name="preferred_mechanic_${index}"]:checked`)?.value || 'N/A';
            const shopName = form.querySelector(`#shop_name_${index}`)?.value || 'N/A';
            const shopLocation = form.querySelector(`#shop_location_${index}`)?.value || 'N/A';
            const preferenceReason = form.querySelector(`#preference_reason_${index}`)?.value || 'N/A';
            const nextMaintenance = form.querySelector(`input[name="next_maintenance_${index}"]:checked`)?.value || 'N/A';
            const trackingHelp = form.querySelector(`input[name="tracking_help_${index}"]:checked`)?.value || 'N/A';

            // Heading for each vehicle
            doc.setFontSize(13);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(40, 167, 69);
            doc.text(`Vehicle #${index}`, 20, currentY);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(50);
            currentY += 7;

            // Table for this vehicle
            const vehicleInfoData = [
                ['Make', make],
                ['Model', model],
                ['Year', year],
                ['Mileage', mileage],
                ['Usage Frequency', usageFrequency],
                ['Primary Usage', purpose],
                ['Last Oil Change', oilChange],
                ['Tire Rotation', tireRotation],
                ['Warning Lights', warningLights],
                ['Unusual Noises', unusualNoises],
                ['Performance Issues', performanceIssues],
                ['Recent Repairs', recentRepairs],
                ['Preferred Mechanic', preferredMechanic],
            ];
            if (preferredMechanic === 'yes') {
                vehicleInfoData.push(['Shop Name', shopName]);
                vehicleInfoData.push(['Shop Location', shopLocation]);
                vehicleInfoData.push(['Preference Reason', preferenceReason]);
            }
            vehicleInfoData.push(['Next Maintenance', nextMaintenance]);
            vehicleInfoData.push(['Tracking Help', trackingHelp]);

            doc.autoTable({
                startY: currentY,
                head: [['Field', 'Value']],
                body: vehicleInfoData,
                theme: 'grid',
                styles: {
                    font: 'helvetica',
                    fontSize: 12,
                    cellPadding: 3,
                    textColor: [50, 50, 50]
                },
                headStyles: {
                    fillColor: [102, 126, 234],
                    textColor: [255, 255, 255],
                    fontStyle: 'bold'
                },
                columnStyles: {
                    0: { fontStyle: 'bold', cellWidth: 50 },
                    1: { cellWidth: 'auto' }
                },
                margin: { left: 20, right: 20 },
                didDrawPage: function(data) {
                    currentY = data.cursor.y;
                }
            });
            currentY += 15;
        });
    }

    // --- Selected Tasks Section ---
    // Always start Selected Tasks on a new page
    doc.addPage();
    currentY = 20;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(50);
    doc.text('Selected Tasks', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 7;
    
    // Create table for selected tasks with frequency information
    const selectedTasksArray = Array.from(selectedTasks);
    const tasksData = selectedTasksArray.map(taskId => {
        const task = findTaskById(taskId);
        return [
            task.name,
            task.time,
            task.cost,
            task.frequency.charAt(0).toUpperCase() + task.frequency.slice(1),
            task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)
        ];
    });
    
    doc.autoTable({
        startY: currentY,
        head: [['Task', 'Time Estimate', 'Cost', 'Frequency', 'Difficulty']],
        body: tasksData,
        theme: 'grid',
        styles: {
            font: 'helvetica',
            fontSize: 10.5,
            cellPadding: 2,
            textColor: [50, 50, 50],
            minCellHeight: 12
        },
        headStyles: {
            fillColor: [102, 126, 234],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            cellPadding: 3
        },
        columnStyles: {
            0: { cellWidth: 80 },  // Task column 
        1: { cellWidth: 25 },  // Time Estimate
        2: { cellWidth: 25 },  // Cost
        3: { cellWidth: 26 },  // Frequency 
        4: { cellWidth: 25 }   // Difficulty 
        },
        margin: { left: 20, right: 20 }
    });

    // Update currentY after the table
    if (doc.lastAutoTable && typeof doc.lastAutoTable.finalY === 'number') {
        currentY = doc.lastAutoTable.finalY + 10;
    } else {
        currentY += (tasksData.length * 5) + 15;
    }

    // Add total tasks selected right after the tasks table
    doc.setTextColor(50);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const tasksText = `Total Tasks Selected: ${selectedTasksArray.length}`;
    doc.text(tasksText, 20, currentY);
    currentY += 20;

    // --- Calculate frequency-adjusted values for summary ---
    const frequencyAdjusted = calculateFrequencyAdjustedValues(selectedTasksArray);
    
    // Calculate totals using frequency-adjusted values
    const monthlyTime = frequencyAdjusted.monthlyHours;
    const annualTime = frequencyAdjusted.annualHours;
    const monthlyCost = frequencyAdjusted.monthlyCost;
    const annualCost = frequencyAdjusted.annualCost;
    const monthlyDIYCost = monthlyTime * 25; // $25/hour for DIY supplies/tools
    const annualDIYCost = annualTime * 25;
    
    // Get recommended plan
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, monthlyTime);

    // --- Savings Analysis Section ---
    // Always start Savings Analysis on a new page
    doc.addPage();
    addFooter(doc);
    currentY = 20;

    doc.setFontSize(16);
    doc.setTextColor(40, 167, 69);
    doc.setFont('helvetica', 'bold');
    doc.text('Savings Analysis', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 7;

    // Calculate savings for both monthly and annual
    const monthlyMarketSavings = monthlyCost - recommendedPlan.monthlyPrice;
    const annualMarketSavings = annualCost - recommendedPlan.annualPrice;
    const monthlyDIYSavings = (monthlyDIYCost + (monthlyTime * 25)) - recommendedPlan.monthlyPrice; // Adding time value
    const annualDIYSavings = (annualDIYCost + (annualTime * 25)) - recommendedPlan.annualPrice;

    const savingsData = [
        ['Comparison', 'Monthly Savings', 'Annual Savings'],
        ['vs. Market Services', 
         monthlyMarketSavings > 0 ? `$${Math.round(monthlyMarketSavings).toLocaleString()}` : `$${Math.round(Math.abs(monthlyMarketSavings)).toLocaleString()}`,
         annualMarketSavings > 0 ? `$${Math.round(annualMarketSavings).toLocaleString()}` : `$${Math.round(Math.abs(annualMarketSavings)).toLocaleString()}`
        ],
        ['Time Saved', `${Math.round(monthlyTime)} hours`, `${Math.round(annualTime)} hours`]
    ];

    doc.autoTable({
        startY: currentY,
        head: [savingsData[0]],
        body: savingsData.slice(1),
        theme: 'grid',
        styles: {
            font: 'helvetica',
            fontSize: 12,
            cellPadding: 4,
            textColor: [50, 50, 50]
        },
        headStyles: {
            fillColor: [40, 167, 69],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 60 },
            1: { cellWidth: 35 },
            2: { cellWidth: 35 }
        },
        margin: { left: 20, right: 20 }
    });

    // Update currentY after savings table
    if (doc.lastAutoTable && typeof doc.lastAutoTable.finalY === 'number') {
        currentY = doc.lastAutoTable.finalY + 18;
    } else {
        currentY += 18;
    }

    // --- Summary Section ---
    if (doc.internal.pageSize.height - currentY < 80) {
        doc.addPage();
        addFooter(doc);
        currentY = 20;
    }

    // --- What This Time Could Mean for You Box ---
    // Calculate the benefit message
    const demographicCategory = getUserDemographicCategory();
    const benefitMessage = (demographicCategory && timeSavedBenefitsData[demographicCategory])
        ? getTimeSavedBenefit(Math.round(monthlyTime), demographicCategory)
        : null;
    if (benefitMessage) {
        // Box styling (matching CSS: green border, light bg, rounded corners)
        const benefitBoxX = 20;
        const benefitBoxY = currentY;
        const benefitBoxWidth = 170;
        const benefitBoxHeight = 35;
        // Draw box
        doc.setFillColor(248, 249, 250); // #f8f9fa
        doc.setDrawColor(40, 167, 69); // #28a745
        doc.setLineWidth(1);
        doc.roundedRect(benefitBoxX, benefitBoxY, benefitBoxWidth, benefitBoxHeight, 4, 4, 'FD');
        // Heading
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(40, 167, 69); // #28a745
        const headingText = 'What This Time Could Mean for You';
        doc.text(headingText, benefitBoxX + 6, benefitBoxY + 12, { maxWidth: benefitBoxWidth - 12 });
        // Message
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(73, 80, 87); // #495057
        doc.text(benefitMessage, benefitBoxX + 6, benefitBoxY + 22, { maxWidth: benefitBoxWidth - 12 });
        currentY = benefitBoxY + benefitBoxHeight + 18;
    }

    // Create rectangular box for recommended plan
    const boxX = 20;
    const boxY = currentY;
    const boxWidth = 170;
    const boxHeight = 35;

    // Draw the main box with rounded corners effect
    doc.setFillColor(102, 126, 234); // Jamiez blue color
    doc.setDrawColor(102, 126, 234);
    doc.setLineWidth(0.5);
    doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'FD'); // 'FD' = Fill and Draw

    // Add plan information inside the box
    doc.setTextColor(255, 255, 255); // White text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);

    // Plan name - centered horizontally
    const planNameText = `Recommended Plan: ${recommendedPlan.name}`;
    const planNameWidth = doc.getTextWidth(planNameText);
    const planNameX = boxX + (boxWidth - planNameWidth) / 2;
    doc.text(planNameText, planNameX, boxY + 15);

    // Annual cost - centered horizontally
    doc.setFontSize(16);
    const costText = `$${recommendedPlan.annualPrice.toLocaleString()} / year`;
    const costWidth = doc.getTextWidth(costText);
    const costX = boxX + (boxWidth - costWidth) / 2;
    doc.text(costText, costX, boxY + 25);

    // Add extra space after the box before Next Steps
    currentY = boxY + boxHeight + 25;

    // --- Next Steps Section ---
    if (doc.internal.pageSize.height - currentY < 40) {
        doc.addPage();
        addFooter(doc);
        currentY = 20;
    }

    doc.setFontSize(16);
    doc.setTextColor(50);
    doc.setFont('helvetica', 'bold');
    doc.text('Next Steps', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 7;

    doc.setFontSize(12);
    doc.setTextColor(50);
    const nextSteps = [
        '1. Contact Jamiez to schedule a consultation',
        '2. Discuss your specific needs with our team',
        '3. Customize your plan based on your household requirements',
        '4. Start enjoying more time for what matters most!'
    ];

    nextSteps.forEach(step => {
        doc.text(step, 25, currentY);
        currentY += 8;
    });

    currentY += 9;

    // Contact information
    doc.setFont('helvetica', 'bold');
    doc.text('Contact Information:', 20, currentY);
    doc.setFont('helvetica', 'normal');
    currentY += 8;

    const contactInfo = [
        'Website: www.jamiez.com',
        'Email: heyjamiez@jamiez.com',
    ];

    contactInfo.forEach(info => {
        doc.text(info, 25, currentY);
        currentY += 6;
    });

    // Add footer to the final page
    addFooter(doc);
    
    // Save the PDF
    doc.save('jamiez-task-report.pdf');
}

// Function to determine user demographic category
function getUserDemographicCategory() {
    const ageGroup = document.getElementById('age_group')?.value;
    const hasChildren = document.querySelector('input[name="children-teens"]:checked')?.value;
    
    // Check if age group indicates retirement
    if (['60-69', '70-79', '80+'].includes(ageGroup)) {
        return 'Retired Individuals';
    }
    
    // Check if age group indicates working professional
    if (['25-34', '35-44', '45-55'].includes(ageGroup)) {
        if (hasChildren === 'yes') {
            return 'Busy Professionals with Kids';
        } else if (hasChildren === 'no' || hasChildren === 'prefer-not-to-say') {
            return 'Busy Professionals without Kids';
        }
    }
    
    // Default fallback
    return null;
}

// Function to get the closest time saved benefit message
function getTimeSavedBenefit(hoursPerMonth, category) {
    if (!timeSavedBenefitsData[category]) {
        return null;
    }
    
    const availableHours = Object.keys(timeSavedBenefitsData[category])
        .map(h => parseInt(h))
        .sort((a, b) => a - b);
    
    // Find the closest hour value that's <= hoursPerMonth
    let closestHour = availableHours[0]; // Default to smallest
    
    for (let hour of availableHours) {
        if (hour <= hoursPerMonth) {
            closestHour = hour;
        } else {
            break;
        }
    }
    
    return timeSavedBenefitsData[category][closestHour];
}

// Function to display time saved benefits
function displayTimeSavedBenefits(hoursPerMonth) {
    const category = getUserDemographicCategory();
    
    if (!category || !timeSavedBenefitsData[category]) {
        // Remove any existing benefits section
        const existingBenefits = document.querySelector('.time-saved-benefits');
        if (existingBenefits) {
            existingBenefits.remove();
        }
        return;
    }
    
    const benefitMessage = getTimeSavedBenefit(Math.round(hoursPerMonth), category);
    
    if (benefitMessage) {
        // Remove any existing benefits section
        const existingBenefits = document.querySelector('.time-saved-benefits');
        if (existingBenefits) {
            existingBenefits.remove();
        }
        
        // Create new benefits section
        const benefitsSection = document.createElement('div');
        benefitsSection.className = 'time-saved-benefits';
        benefitsSection.innerHTML = `
            <div class="benefits-content">
                <h3>💡 What This Time Could Mean for You</h3>
                <p class="benefit-message">${benefitMessage}</p>
            </div>
        `;
        
        // Insert after the savings highlight section
        const savingsHighlight = document.querySelector('.savings-highlight');
        if (savingsHighlight && savingsHighlight.parentNode) {
            savingsHighlight.parentNode.insertBefore(benefitsSection, savingsHighlight.nextSibling);
        }
    }
}

// Add this function to resolve the ReferenceError
function loadTimeSavedBenefits() {
    // Optionally, you can pass 0 or the current hours per month if available
    displayTimeSavedBenefits(0);
}
