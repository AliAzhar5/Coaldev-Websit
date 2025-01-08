import { reactive } from "vue";

export const store = reactive({
  industries: [
    {
      name: "Healthcare and Life Sciences",
      icon: "fas fa-heartbeat",
      description: `• EHR, EMR, Patient Portal
    • Telemedicine Platforms
    • Patient Monitoring`,
      subcategories: [
        {
          name: "Diagnostics",
          problems: [
            "Misdiagnosis in radiology and pathology",
            "Delayed detection of chronic diseases",
          ],
          description: [
            "Misdiagnosis in radiology and pathology refers to errors in interpreting medical images or tissue samples, leading to incorrect or delayed diagnoses. These errors can result from human oversight, inadequate training, or limitations in technology, impacting patient outcomes.",
            "Delayed detection of chronic diseases occurs when conditions like diabetes, hypertension, or cancer are identified later than optimal, often due to insufficient screening or misdiagnosis. This delay can lead to more severe health complications and reduced treatment effectiveness.",
          ],
          solutions: [
            "AI-powered imaging analysis ensures precise diagnostics with higher accuracy",
            "Predictive analytics identify at-risk patients early for preventive measures",
          ],
        },
        {
          name: "Patient Care",
          problems: ["Long wait times and poor patient experiences"],
          description: [
            "Long wait times and poor patient experiences are common issues in healthcare, leading to dissatisfaction and potential health risks. These issues can stem from inefficient scheduling, inadequate staffing, or outdated technology, impacting patient satisfaction and overall healthcare outcomes.",
          ],
          solutions: [
            "AI-driven virtual assistants streamline patient interactions and reduce wait times",
          ],
        },
        {
          name: "Operations",
          problems: ["Inefficient resource allocation in hospitals"],
          description: [
            "Inefficient resource allocation in hospitals refers to the mismanagement of resources such as staff, equipment, and beds, leading to underutilization or overutilization of resources. This can result in higher costs, reduced patient care quality, and inefficiencies in hospital operations.",
          ],
          solutions: [
            "Predictive algorithms optimize staff and bed utilization",
          ],
        },
        {
          name: "Drug Discovery",
          problems: ["Lengthy and costly drug development cycles"],
          description: [
            "Lengthy and costly drug development cycles refer to the lengthy process of developing new drugs, which can take several years and millions of dollars. This is due to the complex nature of drug discovery, including the need for extensive testing and clinical trials to ensure safety and efficacy. The high costs associated with drug development are often passed on to patients through higher drug prices.",
          ],
          solutions: [
            "AI accelerates molecule analysis and trial predictions for faster drug development",
          ],
        },
      ],
    },
    {
      name: "Financial Services and Banking",
      icon: "fas fa-landmark",
      description: `• Billing & Payment Solutions
    • Financial Analytics
    • Personal Finance Management Apps`,
      subcategories: [
        {
          name: "Fraud Prevention",
          problems: ["Rising online transaction fraud"],
          description: [
            "Rising online transaction fraud refers to the increasing instances of fraudulent activities conducted through online platforms, such as e-commerce websites, banking apps, and social media. These fraudulent activities can range from phishing scams to identity theft, and can result in significant financial losses for both consumers and businesses. The rise in online fraud is often attributed to the ease of access to personal information through digital channels and the lack of robust security measures in place to prevent such activities.",
          ],
          solutions: [
            "Real-time fraud detection through anomaly-based AI models",
          ],
        },
        {
          name: "Customer Engagement",
          problems: ["Generic financial product recommendations"],
          description: [
            "Generic financial product recommendations refer to the use of automated systems that provide a wide range of financial products to customers, without considering their individual needs or financial goals. These recommendations may include a variety of products, such as credit cards, loans, and investment options, but may not be tailored to the specific financial situation or preferences of the customer. This approach can lead to customers receiving products that are not suitable for their financial needs, resulting in potential dissatisfaction and financial risks.",
          ],
          solutions: [
            "AI delivers personalized financial advice tailored to user needs",
          ],
        },
        {
          name: "Risk Management",
          problems: ["Poor credit risk assessment"],
          description: [
            "Poor credit risk assessment refers to the inadequate evaluation of an individual's or organization's ability to repay debts or loans. This can lead to financial losses for lenders and investors, as well as increased risk of default. Poor credit risk assessment often occurs due to insufficient data analysis, flawed credit scoring models, or biased decision-making processes, which can result in incorrect risk assessments and poor investment returns.",
          ],
          solutions: [
            "Advanced machine learning models analyze vast datasets for accurate credit scoring",
          ],
        },
        {
          name: "Operational Efficiency",
          problems: ["Manual compliance checks delaying processes"],
          description: [
            "Manual compliance checks refer to the use of human resources to review and verify compliance with regulations and standards. This process can be time-consuming and prone to errors, as it requires manual review of documents and data. The manual nature of compliance checks can also lead to delays in processing transactions or approvals, impacting operational efficiency and customer satisfaction.",
          ],
          solutions: [
            "Natural Language Processing (NLP) automates compliance reviews for faster approvals",
          ],
        },
      ],
    },
    {
      name: "Retail and E-commerce",
      icon: "fas fa-shopping-cart",
      description: `• Inventory Management
    • Supply Chain Solutions
    • Personal Finance Management Apps`,
      subcategories: [
        {
          name: "Inventory Management",
          problems: ["Overstock or stockouts affecting profitability"],
          description: [
            "Overstock or stockouts affecting profitability refers to the situation where a retailer has either too much or too little inventory, leading to financial losses. This can occur due to inaccurate demand forecasting, poor inventory management, or supply chain disruptions. Overstocking can lead to increased storage costs, spoilage, and obsolescence, while stockouts can result in lost sales and customer dissatisfaction.",
          ],
          solutions: [
            "Predictive models optimize inventory levels based on demand forecasts",
          ],
        },
        {
          name: "Personalization",
          problems: ["Lack of targeted product recommendations"],
          description: [
            "Lack of targeted product recommendations refers to the inability of e-commerce platforms to provide personalized product suggestions based on user behavior, preferences, and past purchases. This can lead to generic product recommendations that may not align with the user's specific needs or interests, resulting in lower conversion rates and customer dissatisfaction.",
          ],
          solutions: [
            "AI analyzes user behavior to suggest tailored products, increasing sales",
          ],
        },
        {
          name: "Pricing",
          problems: ["Static pricing strategies leading to revenue loss"],
          description: [
            "Static pricing strategies refer to the use of fixed pricing models for products or services, without considering market dynamics or customer preferences. This can lead to revenue loss, as it may not reflect the true value or demand for the product. Static pricing strategies often result in missed opportunities to optimize revenue through dynamic pricing or targeted promotions.",
          ],
          solutions: [
            "Dynamic pricing algorithms adjust prices based on real-time demand",
          ],
        },
        {
          name: "Customer Support",
          problems: ["Ineffective handling of customer queries"],
          description: [
            "Ineffective handling of customer queries refers to the inability of customer support teams to provide timely and accurate responses to customer inquiries. This can lead to customer dissatisfaction, as it may result in delays in resolving issues or providing the necessary assistance. Ineffective customer support can also impact the overall reputation of the e-commerce platform, as it may indicate a lack of resources or inadequate training for customer service representatives.",
          ],
          solutions: [
            "Chatbots and virtual assistants provide efficient customer support 24/7",
          ],
        },
      ],
    },
    {
      name: "Manufacturing",
      icon: "fas fa-industry",
      description: `• IoT & Automation
    • Predictive Maintenance
    • Supply Chain Visibility`,
      subcategories: [
        {
          name: "Predictive Maintenance",
          problems: ["Unexpected machinery breakdowns causing delays"],
          description: [
            "Unexpected machinery breakdowns causing delays refers to the situation where machinery or equipment in a manufacturing facility unexpectedly fails, leading to production disruptions and delays. These breakdowns can occur due to a variety of factors, such as mechanical wear and tear, electrical issues, or unexpected external factors. The unexpected nature of these breakdowns can lead to disruptions in the production process, resulting in lost productivity and increased costs associated with repairing or replacing the machinery.",
          ],
          solutions: ["AI predicts maintenance needs, minimizing downtime"],
        },
        {
          name: "Quality Assurance",
          problems: ["High defect rates in production"],
          description: [
            "High defect rates in production refer to the situation where a manufacturing facility experiences a high number of defective products or components, leading to increased costs and potential revenue loss. These defects can occur due to a variety of factors, such as poor quality control processes, inadequate training for production staff, or inadequate machinery maintenance. The high defect rates can result in rework, scrap, and increased costs associated with repairing or replacing defective products.",
          ],
          solutions: [
            "AI-based visual inspection ensures defect-free manufacturing",
          ],
        },
        {
          name: "Supply Chain",
          problems: ["Delays due to poor demand forecasts"],
          description: [
            "Delays due to poor demand forecasts refer to the situation where a manufacturing facility experiences delays in receiving raw materials or components due to inaccurate demand forecasts. This can lead to production disruptions, as the facility may not have the necessary resources to meet the demand. Poor demand forecasting can also result in excess inventory, leading to increased storage costs and potential waste. Additionally, delays in receiving raw materials can impact the overall production schedule, resulting in lost productivity and increased costs associated with expedited shipping or emergency orders.",
          ],
          solutions: ["Machine learning optimizes supply chain management"],
        },
        {
          name: "Automation",
          problems: ["High labor costs and low efficiency"],
          description: [
            "High labor costs and low efficiency refer to the situation where a manufacturing facility experiences high labor costs and low productivity due to inefficient use of automation and robotics. This can lead to increased costs associated with hiring and training new employees, as well as reduced output and revenue. Inefficient automation and robotics can also result in slower production times, leading to delays in meeting customer demand and potential revenue loss.",
          ],
          solutions: [
            "Robotic Process Automation (RPA) streamlines repetitive tasks",
          ],
        },
      ],
    },
    {
      name: "Transportation and Logistics",
      icon: "fas fa-truck",
      description: `• Real-Time Fleet Tracking
    • Route Optimization
    • Warehouse Automation`,
      subcategories: [
        {
          name: "Route Optimization",
          problems: ["Inefficient delivery routes increase costs"],
          description: [
            "Inefficient delivery routes increase costs refer to the situation where a transportation company experiences increased costs due to inefficient delivery routes. These routes may result in longer travel times, increased fuel consumption, or inefficient use of resources, leading to higher operational costs. Inefficient routes can also impact customer satisfaction, as they may lead to delays or increased delivery times, resulting in lost business and potential revenue loss.",
          ],
          solutions: ["AI recommends optimal routes, saving fuel and time"],
        },
        {
          name: "Fleet Management",
          problems: ["Poor tracking of fleet health and performance"],
          description: [
            "Poor tracking of fleet health and performance refers to the situation where a transportation company experiences issues with tracking the health and performance of their fleet of vehicles. This can lead to increased costs associated with maintenance, repairs, and fuel consumption, as well as potential revenue loss due to vehicle downtime or inefficiencies in the delivery process. Poor fleet tracking can also impact the overall reputation of the transportation company, as it may indicate a lack of resources or inadequate training for drivers and maintenance staff.",
          ],
          solutions: ["Predictive analytics ensures timely fleet servicing"],
        },
        {
          name: "Delivery Efficiency",
          problems: ["Missed delivery deadlines harm customer trust"],
          description: [
            "Missed delivery deadlines harm customer trust refers to the situation where a transportation company experiences missed delivery deadlines, leading to customer dissatisfaction and potential revenue loss. These missed deadlines can occur due to a variety of factors, such as inefficient scheduling, inadequate staffing, or logistical issues. The missed deadlines can result in lost business, as customers may choose to use alternative transportation providers or switch to competitors. Additionally, missed deadlines can impact the overall reputation of the transportation company, as it may indicate a lack of resources or inadequate planning for the delivery process.",
          ],
          solutions: ["AI-powered scheduling ensures on-time delivery"],
        },
        {
          name: "Autonomous Systems",
          problems: ["Manual operations limit scalability"],
          description: [
            "Manual operations limit scalability refers to the situation where a transportation company experiences limitations in scaling their operations due to manual processes. This can lead to inefficiencies in the delivery process, as it may require more human resources to manage the fleet and deliveries. The manual nature of operations can also result in slower delivery times, leading to lost business and potential revenue loss. Additionally, manual operations can be prone to errors, leading to potential disruptions in the delivery process and increased costs associated with correcting errors.",
          ],
          solutions: [
            "AI-enabled autonomous vehicles improve scalability and efficiency",
          ],
        },
      ],
    },
    {
      name: "Energy and Utilities",
      icon: "fas fa-bolt",
      description: `• Energy Distribution
    • Smart Grid Technologies
    • Renewable Energy Management`,
      subcategories: [
        {
          name: "Smart Grids",
          problems: ["Inefficient power distribution"],
          description: [
            "Inefficient power distribution refers to the situation where a power grid experiences inefficiencies in distributing electricity to consumers. This can lead to increased costs associated with maintaining the grid, as well as potential revenue loss due to power outages or disruptions. Inefficient power distribution can also impact customer satisfaction, as it may result in power outages or disruptions, leading to lost business and potential revenue loss.",
          ],
          solutions: [
            "AI dynamically adjusts grid loads based on real-time demand",
          ],
        },
        {
          name: "Predictive Maintenance",
          problems: ["Power outages due to equipment failure"],
          description: [
            "Power outages due to equipment failure refer to the situation where a power grid experiences power outages due to equipment failure. These outages can occur due to a variety of factors, such as mechanical wear and tear, electrical issues, or unexpected external factors. The unexpected nature of these outages can lead to disruptions in the power distribution process, resulting in lost productivity and increased costs associated with repairing or replacing the equipment.",
          ],
          solutions: ["Predictive models identify failures before they occur"],
        },
        {
          name: "Energy Efficiency",
          problems: ["High energy consumption with wastage"],
          description: [
            "High energy consumption with wastage refers to the situation where a power grid experiences high energy consumption with wastage. This can lead to increased costs associated with maintaining the grid, as well as potential revenue loss due to power outages or disruptions. High energy consumption with wastage can also impact customer satisfaction, as it may result in power outages or disruptions, leading to lost business and potential revenue loss.",
          ],
          solutions: ["AI optimizes energy use across systems and devices"],
        },
        {
          name: "Renewable Integration",
          problems: ["Intermittent supply from renewable sources"],
          description: [
            "Intermittent supply from renewable sources refers to the situation where a power grid experiences intermittent supply from renewable sources, such as wind or solar power. This can lead to disruptions in the power distribution process, as the supply may not be consistent or reliable. The intermittent supply can also impact customer satisfaction, as it may result in power outages or disruptions, leading to lost business and potential revenue loss.",
          ],
          solutions: [
            "AI forecasts supply-demand gaps, enabling better resource management",
          ],
        },
      ],
    },
    {
      name: "Telecommunications",
      icon: "fas fa-satellite-dish",
      description: `• Network Infrastructure
    • Customer Service & Billing
    • 5G & Emerging Technologies`,
      subcategories: [
        {
          name: "Network Optimization",
          problems: ["Poor network performance during peak hours"],
          description: [
            "Poor network performance during peak hours refers to the situation where a telecommunications company experiences poor network performance during peak hours, leading to increased costs associated with maintaining the network and potential revenue loss. This can occur due to a variety of factors, such as insufficient network capacity, high demand for data services, or network congestion. The poor network performance can impact customer satisfaction, as it may result in slower internet speeds, dropped calls, or disrupted services. Additionally, the poor network performance can lead to increased costs associated with maintaining the network and potential revenue loss.",
          ],
          solutions: [
            "AI-driven traffic management allocates bandwidth dynamically",
          ],
        },
        {
          name: "Customer Support",
          problems: ["Delayed resolution of technical issues"],
          description: [
            "Delayed resolution of technical issues refers to the situation where a telecommunications company experiences delays in resolving technical issues reported by customers. This can lead to increased costs associated with maintaining the network and potential revenue loss. These issues can occur due to a variety of factors, such as inadequate staffing, lack of resources, or inadequate training for customer service representatives. The delayed resolution can impact customer satisfaction, as it may result in slower internet speeds, dropped calls, or disrupted services. Additionally, the delayed resolution can lead to increased costs associated with maintaining the network and potential revenue loss.",
          ],
          solutions: [
            "Virtual assistants handle routine inquiries, freeing up human agents for complex problems",
          ],
        },
        {
          name: "Churn Reduction",
          problems: ["High customer attrition due to dissatisfaction"],
          description: [
            "High customer attrition due to dissatisfaction refers to the situation where a telecommunications company experiences high customer attrition, leading to potential revenue loss. This can occur due to a variety of factors, such as poor customer service, inadequate network coverage, or dissatisfaction with pricing and plans. The high attrition can lead to lost business, as customers may choose to switch to alternative telecommunications providers or cancel their subscriptions. Additionally, the high attrition can impact the overall reputation of the telecommunications company, as it may indicate a lack of resources or inadequate training for customer service representatives.",
          ],
          solutions: [
            "Predictive analytics identifies at-risk customers for targeted retention strategies",
          ],
        },
        {
          name: "Fraud Detection",
          problems: ["Telecom frauds like fake SIM activation"],
          description: [
            "Telecom frauds like fake SIM activation refer to the situation where a telecommunications company experiences fraudulent activities related to the activation of SIM cards. This can lead to increased costs associated with maintaining the network and potential revenue loss. These fraudulent activities can occur due to a variety of factors, such as inadequate security measures, lack of resources, or inadequate training for customer service representatives. The fraudulent activities can impact customer satisfaction, as it may result in power outages or disruptions, leading to lost business and potential revenue loss.",
          ],
          solutions: [
            "AI models detect unusual activity patterns and prevent fraud",
          ],
        },
      ],
    },
    {
      name: "Pharmaceuticals and Biotechnology",
      icon: "fas fa-microscope",
      description: `• Clinical Trial Management
    • Drug Discovery
    • Quality Control & Compliance`,
      subcategories: [
        {
          name: "Data Analysis",
          problems: [
            "Difficulty in analyzing vast health data for meaningful insights",
          ],
          description: [
            "Difficulty in analyzing vast health data for meaningful insights refers to the situation where a pharmaceutical company experiences difficulty in analyzing vast health data to provide actionable insights. This can lead to delays in drug discovery and research outcomes, as well as potential revenue loss due to ineffective drug development. The difficulty can occur due to a variety of factors, such as inadequate data analysis tools, lack of resources, or inadequate training for data analysts. The difficulty can also impact the overall reputation of the pharmaceutical company, as it may indicate a lack of resources or inadequate training for data analysts.",
          ],
          solutions: [
            "AI analyzes health data to provide actionable insights, improving drug discovery and research outcomes",
          ],
        },
        {
          name: "Clinical Trials",
          problems: [
            "Challenges in identifying suitable candidates for clinical trials",
          ],
          description: [
            "Challenges in identifying suitable candidates for clinical trials refer to the situation where a pharmaceutical company experiences challenges in identifying suitable candidates for clinical trials. This can lead to delays in drug discovery and research outcomes, as well as potential revenue loss due to ineffective drug development. The challenges can occur due to a variety of factors, such as inadequate candidate selection criteria, lack of resources, or inadequate training for clinical trial staff. The challenges can also impact the overall reputation of the pharmaceutical company, as it may indicate a lack of resources or inadequate training for clinical trial staff.",
          ],
          solutions: [
            "AI identifies suitable candidates for clinical trials by analyzing genetic and health data",
          ],
        },
        {
          name: "Compliance",
          problems: [
            "Time-consuming and error-prone regulatory compliance reviews",
          ],
          description: [
            "Time-consuming and error-prone regulatory compliance reviews refer to the situation where a pharmaceutical company experiences time-consuming and error-prone regulatory compliance reviews. This can lead to delays in drug development and research outcomes, as well as potential revenue loss due to ineffective drug development. The time-consuming and error-prone nature can occur due to a variety of factors, such as inadequate regulatory compliance processes, lack of resources, or inadequate training for regulatory compliance staff. The time-consuming and error-prone nature can also impact the overall reputation of the pharmaceutical company, as it may indicate a lack of resources or inadequate training for regulatory compliance staff.",
          ],
          solutions: [
            "NLP automates regulatory compliance reviews, ensuring faster and error-free documentation",
          ],
        },
        {
          name: "Personalized Medicine",
          problems: [
            "Lack of tailored treatment plans for individual patients",
          ],
          description: [
            "Lack of tailored treatment plans for individual patients refer to the situation where a pharmaceutical company experiences a lack of tailored treatment plans for individual patients. This can lead to delays in drug development and research outcomes, as well as potential revenue loss due to ineffective drug development. The lack of tailored treatment plans can occur due to a variety of factors, such as inadequate patient data analysis, lack of resources, or inadequate training for clinical trial staff. The lack of tailored treatment plans can also impact the overall reputation of the pharmaceutical company, as it may indicate a lack of resources or inadequate training for clinical trial staff.",
          ],
          solutions: [
            "AI designs treatment plans based on patient profiles, improving recovery outcomes",
          ],
        },
      ],
    },
    {
      name: "Media and Entertainment",
      icon: "fas fa-film",
      description: `• Content Management
    • Streaming Platforms
    • Interactive Digital Experiences`,
      subcategories: [
        {
          name: "Content Recommendation",
          problems: ["Low user engagement due to irrelevant suggestions"],
          description: [
            "Low user engagement due to irrelevant suggestions refers to the situation where a media and entertainment company experiences low user engagement due to irrelevant suggestions. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The low user engagement can occur due to a variety of factors, such as inadequate content recommendation algorithms, lack of resources, or inadequate training for content recommendation staff. The low user engagement can also impact the overall reputation of the media and entertainment company, as it may indicate a lack of resources or inadequate training for content recommendation staff.",
          ],
          solutions: [
            "AI recommends content tailored to user preferences, increasing watch time",
          ],
        },
        {
          name: "Automated Content Creation",
          problems: ["High costs and delays in content production"],
          description: [
            "High costs and delays in content production refer to the situation where a media and entertainment company experiences high costs and delays in content production. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The high costs and delays can occur due to a variety of factors, such as inadequate content production processes, lack of resources, or inadequate training for content production staff. The high costs and delays can also impact the overall reputation of the media and entertainment company, as it may indicate a lack of resources or inadequate training for content production staff.",
          ],
          solutions: [
            "AI generates articles, captions, and short videos efficiently",
          ],
        },
        {
          name: "Sentiment Analysis",
          problems: ["Unclear audience response to campaigns"],
          description: [
            "Unclear audience response to campaigns refer to the situation where a media and entertainment company experiences unclear audience response to campaigns. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The unclear audience response can occur due to a variety of factors, such as inadequate audience analysis, lack of resources, or inadequate training for content recommendation staff. The unclear audience response can also impact the overall reputation of the media and entertainment company, as it may indicate a lack of resources or inadequate training for content recommendation staff.",
          ],
          solutions: [
            "AI analyzes audience sentiment across social platforms to fine-tune strategies",
          ],
        },
        {
          name: "Marketing Optimization",
          problems: ["Ineffective ad targeting and ROI tracking"],
          description: [
            "Ineffective ad targeting and ROI tracking refer to the situation where a media and entertainment company experiences ineffective ad targeting and ROI tracking. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The ineffective ad targeting and ROI tracking can occur due to a variety of factors, such as inadequate ad targeting processes, lack of resources, or inadequate training for ad targeting staff. The ineffective ad targeting and ROI tracking can also impact the overall reputation of the media and entertainment company, as it may indicate a lack of resources or inadequate training for ad targeting staff.",
          ],
          solutions: [
            "AI optimizes ad placements and monitors campaign performance in real-time",
          ],
        },
      ],
    },
    {
      name: "Real Estate and Property Management",
      icon: "fas fa-building",
      description: `• Property Management
    • Virtual Tour & Visualization
    • Tenant Portal & Communication`,
      subcategories: [
        {
          name: "Property Insights",
          problems: ["Limited insights into property trends"],
          description: [
            "Limited insights into property trends refer to the situation where a real estate company experiences limited insights into property trends. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The limited insights can occur due to a variety of factors, such as inadequate market analysis, lack of resources, or inadequate training for market analysis staff. The limited insights can also impact the overall reputation of the real estate company, as it may indicate a lack of resources or inadequate training for market analysis staff.",
          ],
          solutions: [
            "AI analyzes market data to identify profitable property investments",
          ],
        },
        {
          name: "Pricing Strategies",
          problems: ["Overpriced or underpriced properties lead to losses"],
          description: [
            "Overpriced or underpriced properties lead to losses refer to the situation where a real estate company experiences overpriced or underpriced properties, leading to potential revenue loss. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The overpriced or underpriced properties can occur due to a variety of factors, such as inadequate pricing strategies, lack of resources, or inadequate training for pricing staff. The overpriced or underpriced properties can also impact the overall reputation of the real estate company, as it may indicate a lack of resources or inadequate training for pricing staff.",
          ],
          solutions: [
            "Dynamic pricing models ensure competitive yet profitable rates",
          ],
        },
        {
          name: "Tenant Management",
          problems: ["Difficulty in screening and managing tenants"],
          description: [
            "Difficulty in screening and managing tenants refer to the situation where a real estate company experiences difficulty in screening and managing tenants. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The difficulty can occur due to a variety of factors, such as inadequate tenant screening processes, lack of resources, or inadequate training for tenant management staff. The difficulty can also impact the overall reputation of the real estate company, as it may indicate a lack of resources or inadequate training for tenant management staff.",
          ],
          solutions: [
            "AI streamlines tenant background checks and communication",
          ],
        },
        {
          name: "Predictive Analytics",
          problems: ["Inconsistent occupancy rates"],
          description: [
            "Inconsistent occupancy rates refer to the situation where a real estate company experiences inconsistent occupancy rates. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The inconsistent occupancy rates can occur due to a variety of factors, such as inadequate occupancy analysis, lack of resources, or inadequate training for occupancy analysis staff. The inconsistent occupancy rates can also impact the overall reputation of the real estate company, as it may indicate a lack of resources or inadequate training for occupancy analysis staff.",
          ],
          solutions: [
            "Predictive models help forecast demand and plan effectively",
          ],
        },
      ],
    },
    {
      name: "Agriculture and Farming",
      icon: "fas fa-tractor",
      description: `• Precision Farming & IoT
    • Crop Management & Monitoring
    • Supply Chain Tracking`,
      subcategories: [
        {
          name: "Precision Farming",
          problems: ["Inefficient use of resources like water and fertilizers"],
          description: [
            "Inefficient use of resources like water and fertilizers refer to the situation where a farming company experiences inefficient use of resources like water and fertilizers. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The inefficient use of resources can occur due to a variety of factors, such as inadequate resource management, lack of resources, or inadequate training for resource management staff. The inefficient use of resources can also impact the overall reputation of the farming company, as it may indicate a lack of resources or inadequate training for resource management staff.",
          ],
          solutions: [
            "AI optimizes input use to maximize yields and reduce costs",
          ],
        },
        {
          name: "Pest Control",
          problems: ["Crop losses due to delayed pest identification"],
          description: [
            "Crop losses due to delayed pest identification refer to the situation where a farming company experiences crop losses due to delayed pest identification. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The crop losses can occur due to a variety of factors, such as inadequate pest identification processes, lack of resources, or inadequate training for pest identification staff. The crop losses can also impact the overall reputation of the farming company, as it may indicate a lack of resources or inadequate training for pest identification staff.",
          ],
          solutions: ["AI identifies pests early using image recognition"],
        },
        {
          name: "Weather Prediction",
          problems: ["Unpredictable weather affects crop planning"],
          description: [
            "Unpredictable weather affects crop planning refer to the situation where a farming company experiences unpredictable weather, affecting crop planning. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The unpredictable weather can occur due to a variety of factors, such as inadequate weather prediction processes, lack of resources, or inadequate training for weather prediction staff. The unpredictable weather can also impact the overall reputation of the farming company, as it may indicate a lack of resources or inadequate training for weather prediction staff.",
          ],
          solutions: [
            "AI provides accurate weather forecasts tailored to farmers' needs",
          ],
        },
        {
          name: "Crop Monitoring",
          problems: ["Poor visibility into crop health"],
          description: [
            "Poor visibility into crop health refer to the situation where a farming company experiences poor visibility into crop health. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The poor visibility can occur due to a variety of factors, such as inadequate crop monitoring processes, lack of resources, or inadequate training for crop monitoring staff. The poor visibility can also impact the overall reputation of the farming company, as it may indicate a lack of resources or inadequate training for crop monitoring staff.",
          ],
          solutions: [
            "AI-powered drones monitor crops and highlight problem areas",
          ],
        },
      ],
    },
    {
      name: "Government and Public Sector",
      icon: "fas fa-university",
      description: `• E-Governance
    • Citizen Service Portals
    • Secure Document Management`,
      subcategories: [
        {
          name: "Citizen Services",
          problems: ["Delayed response to citizen queries"],
          description: [
            "Delayed response to citizen queries refer to the situation where a government and public sector company experiences delayed response to citizen queries. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The delayed response can occur due to a variety of factors, such as inadequate citizen service processes, lack of resources, or inadequate training for citizen service staff. The delayed response can also impact the overall reputation of the government and public sector company, as it may indicate a lack of resources or inadequate training for citizen service staff.",
          ],
          solutions: [
            "AI chatbots provide instant answers and guide citizens efficiently",
          ],
        },
        {
          name: "Infrastructure",
          problems: ["Maintenance inefficiencies leading to failures"],
          description: [
            "Maintenance inefficiencies leading to failures refer to the situation where a government and public sector company experiences maintenance inefficiencies leading to failures. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The maintenance inefficiencies can occur due to a variety of factors, such as inadequate maintenance processes, lack of resources, or inadequate training for maintenance staff. The maintenance inefficiencies can also impact the overall reputation of the government and public sector company, as it may indicate a lack of resources or inadequate training for maintenance staff.",
          ],
          solutions: [
            "Predictive models prioritize infrastructure repairs based on need",
          ],
        },
        {
          name: "Security",
          problems: ["Rising cyber threats and data breaches"],
          description: [
            "Rising cyber threats and data breaches refer to the situation where a government and public sector company experiences rising cyber threats and data breaches. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The rising cyber threats and data breaches can occur due to a variety of factors, such as inadequate security measures, lack of resources, or inadequate training for security staff. The rising cyber threats and data breaches can also impact the overall reputation of the government and public sector company, as it may indicate a lack of resources or inadequate training for security staff.",
          ],
          solutions: [
            "AI enhances threat detection and improves response times",
          ],
        },
        {
          name: "Disaster Management",
          problems: ["Poor disaster response planning"],
          description: [
            "Poor disaster response planning refer to the situation where a government and public sector company experiences poor disaster response planning. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The poor disaster response planning can occur due to a variety of factors, such as inadequate disaster response planning processes, lack of resources, or inadequate training for disaster response planning staff. The poor disaster response planning can also impact the overall reputation of the government and public sector company, as it may indicate a lack of resources or inadequate training for disaster response planning staff.",
          ],
          solutions: [
            "AI predicts disasters and optimizes resource allocation for response efforts",
          ],
        },
      ],
    },
    {
      name: "Aerospace and Defense",
      icon: "fas fa-plane",
      description: `• Mission-Critical Control Systems
    • Security & Surveillance
    • Maintenance & Logistics`,
      subcategories: [
        {
          name: "Predictive Maintenance",
          problems: ["Unexpected failures in critical equipment"],
          description: [
            "Unexpected failures in critical equipment refer to the situation where a aerospace and defense company experiences unexpected failures in critical equipment. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The unexpected failures can occur due to a variety of factors, such as inadequate predictive maintenance processes, lack of resources, or inadequate training for predictive maintenance staff. The unexpected failures can also impact the overall reputation of the aerospace and defense company, as it may indicate a lack of resources or inadequate training for predictive maintenance staff.",
          ],
          solutions: ["AI anticipates failures and schedules timely repairs"],
        },
        {
          name: "Surveillance",
          problems: ["Inefficient manual monitoring"],
          description: [
            "Inefficient manual monitoring refer to the situation where a aerospace and defense company experiences inefficient manual monitoring. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The inefficient manual monitoring can occur due to a variety of factors, such as inadequate surveillance processes, lack of resources, or inadequate training for surveillance staff. The inefficient manual monitoring can also impact the overall reputation of the aerospace and defense company, as it may indicate a lack of resources or inadequate training for surveillance staff.",
          ],
          solutions: [
            "AI enhances real-time surveillance with anomaly detection",
          ],
        },
        {
          name: "Cybersecurity",
          problems: ["Vulnerability to sophisticated cyberattacks"],
          description: [
            "Vulnerability to sophisticated cyberattacks refer to the situation where a aerospace and defense company experiences vulnerability to sophisticated cyberattacks. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The vulnerability can occur due to a variety of factors, such as inadequate cybersecurity measures, lack of resources, or inadequate training for cybersecurity staff. The vulnerability can also impact the overall reputation of the aerospace and defense company, as it may indicate a lack of resources or inadequate training for cybersecurity staff.",
          ],
          solutions: [
            "AI strengthens defense mechanisms with adaptive threat detection",
          ],
        },
        {
          name: "Autonomous Systems",
          problems: ["Limited use of drones and autonomous vehicles"],
          description: [
            "Limited use of drones and autonomous vehicles refer to the situation where a aerospace and defense company experiences limited use of drones and autonomous vehicles. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The limited use can occur due to a variety of factors, such as inadequate autonomous system functionality, lack of resources, or inadequate training for autonomous system functionality staff. The limited use can also impact the overall reputation of the aerospace and defense company, as it may indicate a lack of resources or inadequate training for autonomous system functionality staff.",
          ],
          solutions: ["AI improves autonomous system functionality and safety"],
        },
      ],
    },
    {
      name: "Hospitality and Tourism",
      icon: "fas fa-hotel",
      description: `• Booking & Reservation
    • Guest Experience
    • Revenue Management`,
      subcategories: [
        {
          name: "Dynamic Pricing",
          problems: ["Missed revenue opportunities due to static rates"],
          description: [
            "Missed revenue opportunities due to static rates refer to the situation where a hospitality and tourism company experiences missed revenue opportunities due to static rates. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The missed revenue opportunities can occur due to a variety of factors, such as inadequate pricing strategies, lack of resources, or inadequate training for pricing staff. The missed revenue opportunities can also impact the overall reputation of the hospitality and tourism company, as it may indicate a lack of resources or inadequate training for pricing staff.",
          ],
          solutions: [
            "AI adjusts pricing based on real-time demand and trends",
          ],
        },
        {
          name: "Personalized Experiences",
          problems: ["Generic service offerings reduce customer satisfaction"],
          description: [
            "Generic service offerings reduce customer satisfaction refer to the situation where a hospitality and tourism company experiences generic service offerings, reducing customer satisfaction. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The generic service offerings can occur due to a variety of factors, such as inadequate service offerings, lack of resources, or inadequate training for service offerings staff. The generic service offerings can also impact the overall reputation of the hospitality and tourism company, as it may indicate a lack of resources or inadequate training for service offerings staff.",
          ],
          solutions: [
            "AI customizes services to individual preferences, enhancing loyalty",
          ],
        },
        {
          name: "Booking Automation",
          problems: ["Errors and delays in booking processes"],
          description: [
            "Errors and delays in booking processes refer to the situation where a hospitality and tourism company experiences errors and delays in booking processes. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The errors and delays can occur due to a variety of factors, such as inadequate booking processes, lack of resources, or inadequate training for booking staff. The errors and delays can also impact the overall reputation of the hospitality and tourism company, as it may indicate a lack of resources or inadequate training for booking staff.",
          ],
          solutions: ["AI streamlines bookings with automated systems"],
        },
        {
          name: "Customer Feedback",
          problems: ["Slow response to negative reviews"],
          description: [
            "Slow response to negative reviews refer to the situation where a hospitality and tourism company experiences slow response to negative reviews. This can lead to potential revenue loss, as it may result in lost business and potential revenue loss. The slow response can occur due to a variety of factors, such as inadequate customer feedback processes, lack of resources, or inadequate training for customer feedback staff. The slow response can also impact the overall reputation of the hospitality and tourism company, as it may indicate a lack of resources or inadequate training for customer feedback staff.",
          ],
          solutions: [
            "Sentiment analysis identifies trends and enables quick resolutions",
          ],
        },
      ],
    },
  ],
});
