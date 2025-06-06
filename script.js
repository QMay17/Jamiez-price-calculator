// Jamiez Task & Savings Calculator JavaScript

// Task Data Structure
const taskData = {
    'home-property': [
        {
            id: 'yard-maintenance',
            name: 'Yard & Outdoor Maintenance',
            time: '3-6 hours',
            timeHours: 4.5,
            cost: '$80-200',
            costAmount: 140,
            difficulty: 'medium',
            description: 'Mulch spreading, tree trimming, lawn care',
            tooltip: 'Includes seasonal yard work, pest control, and outdoor equipment maintenance'
        },
        {
            id: 'pool-maintenance',
            name: 'Pool & Water Systems',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$100-250',
            costAmount: 175,
            difficulty: 'medium',
            description: 'Pool chemical checks, filter maintenance',
            tooltip: 'Regular pool maintenance, chemical balancing, and equipment checks'
        },
        {
            id: 'home-repairs',
            name: 'Minor Repairs & Maintenance',
            time: '2-8 hours',
            timeHours: 5,
            cost: '$150-400',
            costAmount: 275,
            difficulty: 'hard',
            description: 'Home repairs, filter changes, maintenance tasks',
            tooltip: 'Basic home repairs, HVAC filter changes, and preventive maintenance'
        },
        {
            id: 'seasonal-prep',
            name: 'Seasonal Property Preparation',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$200-500',
            costAmount: 350,
            difficulty: 'medium',
            description: 'Winterization, spring setup, seasonal transitions',
            tooltip: 'Preparing your property for seasonal changes and weather transitions'
        }
    ],
    'household': [
        {
            id: 'deep-cleaning',
            name: 'Deep Cleaning Services',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$200-400',
            costAmount: 300,
            difficulty: 'medium',
            description: 'Thorough house cleaning, organization',
            tooltip: 'Complete home cleaning including hard-to-reach areas and deep sanitization'
        },
        {
            id: 'laundry-care',
            name: 'Laundry & Clothing Care',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$50-120',
            costAmount: 85,
            difficulty: 'easy',
            description: 'Drop-off laundry, minor tailoring, clothing care',
            tooltip: 'Professional laundry service, dry cleaning coordination, and basic alterations'
        },
        {
            id: 'organization',
            name: 'Home Organization',
            time: '3-6 hours',
            timeHours: 4.5,
            cost: '$150-350',
            costAmount: 250,
            difficulty: 'medium',
            description: 'Decluttering, organizing spaces, storage solutions',
            tooltip: 'Professional organization of closets, pantries, and living spaces'
        },
        {
            id: 'delivery-management',
            name: 'Delivery & Package Management',
            time: '1-2 hours',
            timeHours: 1.5,
            cost: '$30-60',
            costAmount: 45,
            difficulty: 'easy',
            description: 'Package receiving, unpacking, organization',
            tooltip: 'Coordinating deliveries, unpacking items, and organizing new purchases'
        }
    ],
    'errands': [
        {
            id: 'grocery-shopping',
            name: 'Grocery Shopping & Restocking',
            time: '2-3 hours',
            timeHours: 2.5,
            cost: '$40-80',
            costAmount: 60,
            difficulty: 'easy',
            description: 'Grocery runs, pantry restocking, specialty items',
            tooltip: 'Complete grocery shopping service including specialty dietary requirements'
        },
        {
            id: 'gift-services',
            name: 'Gift Wrapping & Shipping',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$50-150',
            costAmount: 100,
            difficulty: 'easy',
            description: 'Gift wrapping, package shipping, returns',
            tooltip: 'Professional gift wrapping, shipping coordination, and return processing'
        },
        {
            id: 'specialty-shopping',
            name: 'Specialty Shopping & Errands',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$60-150',
            costAmount: 105,
            difficulty: 'medium',
            description: 'Pharmacy runs, specialty stores, custom orders',
            tooltip: 'Shopping for specific items, prescription pickup, and custom order coordination'
        },
        {
            id: 'returns-exchanges',
            name: 'Returns & Exchanges',
            time: '1-2 hours',
            timeHours: 1.5,
            cost: '$30-70',
            costAmount: 50,
            difficulty: 'easy',
            description: 'Processing returns, exchanges, store visits',
            tooltip: 'Handling product returns, exchanges, and store credit processing'
        }
    ],
    'transportation': [
        {
            id: 'car-maintenance',
            name: 'Car Maintenance & Service',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$40-100',
            costAmount: 70,
            difficulty: 'easy',
            description: 'Car wash, oil changes, service appointments',
            tooltip: 'Vehicle maintenance coordination, car washing, and service scheduling'
        },
        {
            id: 'airport-transport',
            name: 'Airport Transportation',
            time: '2-6 hours',
            timeHours: 4,
            cost: '$100-300',
            costAmount: 200,
            difficulty: 'easy',
            description: 'Airport dropoff, pickup, luggage assistance',
            tooltip: 'Complete airport transportation service including luggage handling'
        },
        {
            id: 'family-transport',
            name: 'Family Transportation Services',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$50-120',
            costAmount: 85,
            difficulty: 'easy',
            description: 'School pickups, activity transport, appointments',
            tooltip: 'Safe transportation for family members to various activities and appointments'
        }
    ],
    'pet-care': [
        {
            id: 'dog-walking',
            name: 'Dog Walking & Exercise',
            time: '1-2 hours',
            timeHours: 1.5,
            cost: '$25-50',
            costAmount: 37.5,
            difficulty: 'easy',
            description: 'Daily walks, exercise, playtime',
            tooltip: 'Regular dog walking service with exercise and socialization'
        },
        {
            id: 'pet-grooming',
            name: 'Pet Grooming & Care',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$80-200',
            costAmount: 140,
            difficulty: 'medium',
            description: 'Grooming appointments, bathing, nail care',
            tooltip: 'Professional pet grooming coordination and basic care services'
        },
        {
            id: 'pet-sitting',
            name: 'Pet Sitting & Care',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$100-250',
            costAmount: 175,
            difficulty: 'medium',
            description: 'Pet sitting, feeding, companionship',
            tooltip: 'In-home pet care while you are away, including feeding and companionship'
        },
        {
            id: 'pet-transport',
            name: 'Pet Transportation',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$40-100',
            costAmount: 70,
            difficulty: 'easy',
            description: 'Vet visits, groomer transport, pet activities',
            tooltip: 'Safe pet transportation to appointments, grooming, and activities'
        }
    ],
    'storage': [
        {
            id: 'seasonal-storage',
            name: 'Seasonal Storage Management',
            time: '3-6 hours',
            timeHours: 4.5,
            cost: '$100-250',
            costAmount: 175,
            difficulty: 'medium',
            description: 'Holiday decorations, seasonal items storage',
            tooltip: 'Organization and storage of seasonal items with easy retrieval system'
        },
        {
            id: 'document-organization',
            name: 'Document Organization & Shredding',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$75-150',
            costAmount: 112.5,
            difficulty: 'easy',
            description: 'Document filing, secure shredding, digital organization',
            tooltip: 'Professional document organization with secure disposal of sensitive materials'
        },
        {
            id: 'garage-organization',
            name: 'Garage & Storage Organization',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$200-500',
            costAmount: 350,
            difficulty: 'hard',
            description: 'Garage cleanup, storage systems, inventory',
            tooltip: 'Complete garage organization with storage solutions and inventory management'
        },
        {
            id: 'equipment-management',
            name: 'Equipment & Tool Management',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$60-150',
            costAmount: 105,
            difficulty: 'medium',
            description: 'Tool organization, equipment maintenance, inventory',
            tooltip: 'Organization and maintenance of tools and equipment with tracking system'
        }
    ],
    'lifestyle': [
        {
            id: 'event-planning',
            name: 'Event Planning & Coordination',
            time: '4-12 hours',
            timeHours: 8,
            cost: '$300-800',
            costAmount: 550,
            difficulty: 'hard',
            description: 'Birthday parties, celebrations, dinner planning',
            tooltip: 'Complete event planning including venue coordination, catering, and logistics'
        },
        {
            id: 'gift-services-lifestyle',
            name: 'Personal Gifting Services',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$100-300',
            costAmount: 200,
            difficulty: 'medium',
            description: 'Gift selection, wrapping, delivery coordination',
            tooltip: 'Personalized gift selection and coordination for special occasions'
        },
        {
            id: 'concierge-services',
            name: 'Personal Concierge Services',
            time: '2-6 hours',
            timeHours: 4,
            cost: '$150-400',
            costAmount: 275,
            difficulty: 'medium',
            description: 'Restaurant reservations, ticket booking, personal assistance',
            tooltip: 'Premium concierge services for reservations, bookings, and personal requests'
        },
        {
            id: 'equipment-rental',
            name: 'Equipment & Event Rentals',
            time: '1-3 hours',
            timeHours: 2,
            cost: '$50-200',
            costAmount: 125,
            difficulty: 'easy',
            description: 'Party equipment, tools, outdoor gear rentals',
            tooltip: 'Rental coordination for events, tools, and recreational equipment'
        }
    ],
    'seasonal': [
        {
            id: 'holiday-decorating',
            name: 'Holiday Decoration Setup',
            time: '4-8 hours',
            timeHours: 6,
            cost: '$200-500',
            costAmount: 350,
            difficulty: 'medium',
            description: 'Christmas trees, holiday displays, seasonal decorating',
            tooltip: 'Complete holiday decoration service including setup and takedown'
        },
        {
            id: 'patio-seasonal',
            name: 'Patio Furniture Seasonal Care',
            time: '2-4 hours',
            timeHours: 3,
            cost: '$80-200',
            costAmount: 140,
            difficulty: 'easy',
            description: 'Patio furniture cover/uncover, cushion care',
            tooltip: 'Seasonal patio furniture care including cleaning and weather protection'
        },
        {
            id: 'seasonal-meals',
            name: 'Seasonal & Holiday Meal Prep',
            time: '3-8 hours',
            timeHours: 5.5,
            cost: '$150-400',
            costAmount: 275,
            difficulty: 'medium',
            description: 'Holiday catering, seasonal specialty foods',
            tooltip: 'Coordination of seasonal meals and holiday catering services'
        },
        {
            id: 'winter-prep',
            name: 'Winter Preparation Services',
            time: '3-6 hours',
            timeHours: 4.5,
            cost: '$120-300',
            costAmount: 210,
            difficulty: 'medium',
            description: 'Winterization, snow prep, seasonal transitions',
            tooltip: 'Complete winter preparation including weatherproofing and equipment setup'
        }
    ]
};

// Membership Plans Data
const membershipPlans = {
    essentials: {
        name: 'Essentials',
        monthlyPrice: 208,
        annualPrice: 2500,
        hours: 4,
        description: 'Ideal for small homes, condos/townhomes, or apartments',
        features: [
            '4 hours per month',
            'Personal Storage (5 bins)',
            'Airport Transportation',
            'Free Tool Share',
            'Next visit delivery'
        ],
        maxTasks: 4
    },
    executive: {
        name: 'Executive',
        monthlyPrice: 417,
        annualPrice: 5000,
        hours: 10,
        description: 'Ideal for medium-sized homes or families',
        features: [
            '10 hours per month',
            'Personal Warehouse (5 bins + 1 pallet)',
            'Premium Services included',
            'Next day delivery',
            '20% off additional hours'
        ],
        maxTasks: 8
    },
    platinum: {
        name: 'Platinum',
        monthlyPrice: 833,
        annualPrice: 10000,
        hours: 20,
        description: 'Full-service household management with concierge support',
        features: [
            '20 hours per month',
            'Family Warehouse (10 bins + 2 pallets)',
            '$1,000 concierge credit',
            'Same day delivery',
            'Unlimited premium services'
        ],
        maxTasks: 16
    }
};

// Bundle Configurations
const bundles = {
    'busy-parent': [
        'grocery-shopping', 'laundry-care', 'delivery-management', 
        'family-transport', 'dog-walking', 'organization'
    ],
    'professional': [
        'deep-cleaning', 'laundry-care', 'car-maintenance', 
        'airport-transport', 'concierge-services', 'document-organization'
    ],
    'homeowner': [
        'yard-maintenance', 'home-repairs', 'deep-cleaning', 
        'garage-organization', 'seasonal-storage', 'seasonal-prep'
    ],
    'pet-owner': [
        'dog-walking', 'pet-grooming', 'pet-sitting', 'pet-transport'
    ]
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
    // Category toggle functionality - FIXED VERSION
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const tasksContainer = document.getElementById(`${category}-tasks`);
            const toggle = this.querySelector('.category-toggle');
            
            if (tasksContainer && toggle) {
                if (tasksContainer.classList.contains('active')) {
                    tasksContainer.classList.remove('active');
                    toggle.classList.remove('active');
                } else {
                    // Close other open categories
                    document.querySelectorAll('.category-tasks.active').forEach(container => {
                        container.classList.remove('active');
                    });
                    document.querySelectorAll('.category-toggle.active').forEach(t => {
                        t.classList.remove('active');
                    });
                    
                    // Open clicked category
                    tasksContainer.classList.add('active');
                    toggle.classList.add('active');
                }
            }
        });
    });

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
            // Simulate navigation to signup
            window.open('https://www.jamiez.com/get-started', '_blank');
        });
    }
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

    if (selectedBundles.has(bundleName)) {
        selectedBundles.delete(bundleName);
        // Remove tasks associated with this bundle
        bundleTasks.forEach(taskId => {
            selectedTasks.delete(taskId);
            const checkbox = document.getElementById(taskId);
            if (checkbox) {
                checkbox.checked = false;
                checkbox.closest('.task-item').classList.remove('selected');
            }
        });
    } else {
        selectedBundles.add(bundleName);
        bundleTasks.forEach(taskId => {
            selectedTasks.add(taskId);
            const checkbox = document.getElementById(taskId);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.closest('.task-item').classList.add('selected');
            }
        });
    }
    updateSummary();
    updateBundleButtonStates();
}

function updateBundleButtonStates() {
    document.querySelectorAll('.bundle-btn').forEach(btn => {
        const bundleName = btn.dataset.bundle;
        if (selectedBundles.has(bundleName)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateSummary() {
    const selectedTasksArray = Array.from(selectedTasks);
    
    // Calculate totals
    let totalDIYTime = 0;
    let totalDIYCost = 0;
    let totalMarketCost = 0;
    
    selectedTasksArray.forEach(taskId => {
        const task = findTaskById(taskId);
        if (task) {
            totalDIYTime += task.timeHours;
            totalDIYCost += 20; // Estimated supply cost
            totalMarketCost += task.costAmount;
        }
    });

    // Find recommended plan
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, totalDIYTime);
    const planCost = isAnnualView ? recommendedPlan.annualPrice : recommendedPlan.monthlyPrice;
    
    // Calculate savings
    let marketVsJamiezSavings;
    if (isAnnualView) {
        marketVsJamiezSavings = (totalMarketCost * 12) - planCost;
    } else {
        marketVsJamiezSavings = totalMarketCost - planCost;
    }
    const diyVsJamiezSavings = (totalDIYCost + (totalDIYTime * 25)) - planCost; // $25/hour value of time
    const bestSavings = Math.max(marketVsJamiezSavings, 0);

    // Update comparison table
    updateComparisonTable(totalDIYTime, totalDIYCost, totalMarketCost, planCost, selectedTasksArray.length, recommendedPlan);
    
    // Update savings highlight
    updateSavingsHighlight(bestSavings, totalDIYTime);
    
    // Update plan recommendation
    updatePlanRecommendation(recommendedPlan, selectedTasksArray.length);
    
    // Update plan cards
    updatePlanCards(recommendedPlan);
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
    const formatCost = (cost, isJamiez = false) => {
        if (isJamiez && isAnnualView) {
            // Use annual price as is
            return `$${cost.toLocaleString()}`;
        } else {
            // Multiply only for non-annual Jamiez cost
            const totalCost = Math.round(cost * multiplier);
            return `$${totalCost.toLocaleString()}`;
        }
    };
    
    // Update time values
    const diyTimeEl = document.querySelector('.diy-time');
    const marketTimeEl = document.querySelector('.market-time');
    const jamiezTimeEl = document.querySelector('.jamiez-time');
    
    if (diyTimeEl) diyTimeEl.textContent = formatTime(diyTime);
    if (marketTimeEl) marketTimeEl.textContent = formatTime(0);
    if (jamiezTimeEl) jamiezTimeEl.textContent = formatTime(0);
    
    // Update cost values
    const diyCostEl = document.querySelector('.diy-cost');
    const marketCostEl = document.querySelector('.market-cost');
    const jamiezCostEl = document.querySelector('.jamiez-cost');
    
    if (diyCostEl) diyCostEl.textContent = formatCost(diyCost);
    if (marketCostEl) marketCostEl.textContent = formatCost(marketCost);
    if (jamiezCostEl) jamiezCostEl.textContent = formatCost(jamiezCost, true);
    
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
        
        // Add appropriate icon based on coverage
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
    if (timeValueEl) timeValueEl.textContent = `${Math.round(timeHours * (isAnnualView ? 12 : 1))} hours/${period.toLowerCase()}`;
    
    // Add animation for positive savings
    const savingsCard = document.querySelector('.savings-highlight');
    if (savingsCard) {
        if (savings > 0) {
            savingsCard.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        } else {
            savingsCard.style.background = 'linear-gradient(135deg, #667eea 0%, #7ea4f1 100%)';
        }
    }
}

function updatePlanRecommendation(plan, taskCount) {
    const planNameEl = document.querySelector('.plan-name');
    const planDetailsEl = document.querySelector('.plan-details');
    
    if (!planNameEl || !planDetailsEl) return;
    
    if (taskCount === 0) {
        planNameEl.textContent = 'Select tasks to see recommendation';
        planDetailsEl.textContent = '';
        return;
    }
    
    planNameEl.textContent = `${plan.name} Plan`;
    
    if (taskCount <= plan.maxTasks) {
        planDetailsEl.textContent = `Perfect fit! This plan covers all ${taskCount} selected tasks.`;
        planDetailsEl.style.color = '#28a745';
    } else {
        const additionalTasks = taskCount - plan.maxTasks;
        planDetailsEl.textContent = `This plan covers ${plan.maxTasks} tasks. ${additionalTasks} additional tasks will require add-on fees.`;
        planDetailsEl.style.color = '#ffc107';
    }
}

function updatePlanCards(recommendedPlan) {
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('recommended');
        if (card.dataset.plan === recommendedPlan.name.toLowerCase()) {
            card.classList.add('recommended');
        }
    });
}

function getRecommendedPlan(taskCount, timeHours) {
    // Logic to determine the best plan based on task count and time
    if (taskCount <= 4 && timeHours <= 4) {
        return membershipPlans.essentials;
    } else if (taskCount <= 8 && timeHours <= 10) {
        return membershipPlans.executive;
    } else {
        return membershipPlans.platinum;
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
    // Add click handler to automatically scroll to summary on mobile when tasks are selected
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

// Performance optimization: Debounce update function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create debounced version of updateSummary for better performance
const debouncedUpdateSummary = debounce(updateSummary, 150);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Space bar to toggle checkboxes when focused
    if (e.code === 'Space' && e.target.classList.contains('task-checkbox')) {
        e.preventDefault();
        e.target.click();
    }
    
    // Enter key to toggle category sections
    if (e.code === 'Enter' && e.target.classList.contains('category-header')) {
        e.target.click();
    }
});

// Add loading state management
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

// Initialize tooltips for better accessibility
function initializeTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-label', element.dataset.tooltip);
    });
}

// Call tooltip initialization
document.addEventListener('DOMContentLoaded', initializeTooltips);

// Add error handling for better user experience
window.addEventListener('error', function(e) {
    console.error('Calculator Error:', e.error);
    // Could show user-friendly error message here
});

// Add analytics/tracking placeholder (replace with actual analytics)
function trackUserAction(action, details = {}) {
    // Placeholder for analytics tracking
    console.log('User Action:', action, details);
    
    // Example implementation:
    // gtag('event', action, {
    //     'custom_parameter': details
    // });
}

// Track important user interactions
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('task-checkbox')) {
        trackUserAction('task_selected', {
            task_id: e.target.id,
            selected: e.target.checked
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Track bundle selections
    document.querySelectorAll('.bundle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackUserAction('bundle_selected', {
                bundle_type: this.dataset.bundle
            });
        });
    });

    // Track frequency changes
    document.querySelectorAll('.freq-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackUserAction('frequency_changed', {
                frequency: this.dataset.freq
            });
        });
    });
});

// Enhanced accessibility features
function enhanceAccessibility() {
    // Add ARIA labels and descriptions
    document.querySelectorAll('.task-item').forEach(item => {
        const checkbox = item.querySelector('.task-checkbox');
        const taskName = item.querySelector('.task-name');
        const taskDetails = item.querySelector('.task-details');
        
        if (checkbox && taskName && taskDetails) {
            checkbox.setAttribute('aria-describedby', `${checkbox.id}-description`);
            
            const description = document.createElement('div');
            description.id = `${checkbox.id}-description`;
            description.className = 'sr-only';
            description.textContent = `${taskName.textContent}: ${taskDetails.textContent}`;
            item.appendChild(description);
        }
    });
    
    // Add screen reader only class
    const style = document.createElement('style');
    style.textContent = `
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
    `;
    document.head.appendChild(style);
}

// Call accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Export functionality (if export button exists)
function exportResults() {
    const selectedTasksArray = Array.from(selectedTasks);
    const tasks = selectedTasksArray.map(id => findTaskById(id)).filter(Boolean);
    
    let totalDIYTime = 0;
    let totalDIYCost = 0;
    let totalMarketCost = 0;
    
    tasks.forEach(task => {
        totalDIYTime += task.timeHours;
        totalDIYCost += 20;
        totalMarketCost += task.costAmount;
    });
    
    const recommendedPlan = getRecommendedPlan(selectedTasksArray.length, totalDIYTime);
    const planCost = isAnnualView ? recommendedPlan.annualPrice : recommendedPlan.monthlyPrice;
    const savings = Math.max(totalMarketCost - planCost, 0);
    const period = isAnnualView ? 'Annual' : 'Monthly';
    
    const exportData = {
        selectedTasks: tasks.map(t => ({
            name: t.name,
            time: t.time,
            cost: t.cost,
            difficulty: t.difficulty
        })),
        summary: {
            totalTasks: tasks.length,
            diyTime: `${Math.round(totalDIYTime * (isAnnualView ? 12 : 1))} hours`,
            diyEstimatedCost: `${Math.round(totalDIYCost * (isAnnualView ? 12 : 1))}`,
            marketCost: `${Math.round(totalMarketCost * (isAnnualView ? 12 : 1))}`,
            jamiezPlan: recommendedPlan.name,
            jamiezCost: `${Math.round(planCost * (isAnnualView ? 12 : 1))}`,
            estimatedSavings: `${Math.round(savings * (isAnnualView ? 12 : 1))}`,
            timeSaved: `${Math.round(totalDIYTime * (isAnnualView ? 12 : 1))} hours`,
            period: period
        },
        timestamp: new Date().toLocaleString()
    };
    
    // Create and download the report
    const reportContent = generateReport(exportData);
    downloadReport(reportContent, 'jamiez-savings-calculation.txt');
    
    // Show success message
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        const originalText = exportBtn.innerHTML;
        exportBtn.innerHTML = '<i class="fas fa-check"></i> Report Generated!';
        exportBtn.style.background = '#28a745';
        exportBtn.style.color = 'white';
        
        setTimeout(() => {
            exportBtn.innerHTML = originalText;
            exportBtn.style.background = '';
            exportBtn.style.color = '';
        }, 2000);
    }
}

function generateReport(data) {
    const { selectedTasks, summary, timestamp } = data;
    
    let report = `JAMIEZ TASK & SAVINGS CALCULATOR REPORT
Generated: ${timestamp}
Period: ${summary.period}

===========================================
SELECTED TASKS (${summary.totalTasks} total)
===========================================
`;

    selectedTasks.forEach((task, index) => {
        report += `${index + 1}. ${task.name}
   Time Estimate: ${task.time}
   Market Cost: ${task.cost}
   Difficulty: ${task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}

`;
    });

    report += `===========================================
COST COMPARISON
===========================================
DIY Approach:
- Time Required: ${summary.diyTime}
- Estimated Supply Cost: ${summary.diyEstimatedCost}

Market Services:
- Total Cost: ${summary.marketCost}
- Time Required: 0 hours (fully outsourced)

Jamiez ${summary.jamiezPlan} Plan:
- Cost: ${summary.jamiezCost}
- Time Required: 0 hours (fully managed)

===========================================
SAVINGS SUMMARY
===========================================
Estimated Savings vs Market: ${summary.estimatedSavings}
Time Saved: ${summary.timeSaved}
Recommended Plan: ${summary.jamiezPlan}

===========================================
NEXT STEPS
===========================================
1. Contact Jamiez to schedule a consultation
2. Discuss your specific needs with our team
3. Customize your plan based on your household requirements
4. Start enjoying more time for what matters most!

Contact Information:
Website: www.jamiez.com
Email: hello@jamiez.com
Phone: (555) JAMIEZ-1

Thank you for considering Jamiez for your household management needs!
`;

    return report;
}

function downloadReport(content, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Utility function to animate numbers
function animateNumber(element, start, end, duration = 1000) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Initialize export button if it exists
document.addEventListener('DOMContentLoaded', function() {
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            exportResults();
        });
    }
});