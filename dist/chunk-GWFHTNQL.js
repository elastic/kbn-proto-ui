// src/solution-menus/observability.ts
var observabilityNav = {
  "primaryItems": [
    {
      "id": "observability-overview",
      "label": "Overview",
      "href": "#observability-overview",
      "iconType": "home"
    },
    {
      "id": "discover",
      "label": "Discover",
      "href": "#discover",
      "iconType": "productDiscover"
    },
    {
      "id": "dashboards",
      "label": "Dashboards",
      "href": "#dashboards",
      "iconType": "productDashboard"
    },
    {
      "id": "evals",
      "label": "Evaluations",
      "href": "#evals",
      "iconType": "flask"
    },
    {
      "id": "workflows",
      "label": "Workflows",
      "href": "#workflows:list",
      "iconType": "workflow",
      "sections": [
        {
          "id": "workflows-links",
          "items": [
            {
              "id": "workflows:list",
              "label": "Workflows",
              "href": "#workflows:list"
            },
            {
              "id": "workflows:executions",
              "label": "Executions",
              "href": "#workflows:executions"
            },
            {
              "id": "workflows:library",
              "label": "Workflow templates",
              "href": "#workflows:library"
            }
          ]
        }
      ]
    },
    {
      "id": "observability-overview:alerts",
      "label": "Alerts",
      "href": "#observability-overview:alerts",
      "iconType": "warning"
    },
    {
      "id": "observability-overview:cases",
      "label": "Cases",
      "href": "#observability-overview:cases",
      "iconType": "briefcase"
    },
    {
      "id": "slo",
      "label": "SLOs",
      "href": "#slo",
      "iconType": "chartGauge"
    },
    {
      "id": "streams",
      "label": "Streams",
      "href": "#streams",
      "iconType": "productStreamsWired"
    },
    {
      "id": "applications",
      "label": "Applications",
      "iconType": "spaces",
      "sections": [
        {
          "id": "apm",
          "items": [
            {
              "id": "apm:services",
              "label": "Service inventory",
              "href": "#apm:services"
            },
            {
              "id": "apm:traces",
              "label": "Traces",
              "href": "#apm:traces"
            },
            {
              "id": "apm:dependencies",
              "label": "Dependencies",
              "href": "#apm:dependencies"
            },
            {
              "id": "ux",
              "label": "User experience",
              "href": "#ux"
            },
            {
              "id": "digital_experience",
              "label": "Digital experience",
              "href": "#digital_experience"
            }
          ]
        },
        {
          "id": "synthetics",
          "items": [
            {
              "id": "synthetics",
              "label": "Monitors",
              "href": "#synthetics"
            },
            {
              "id": "synthetics:certificates",
              "label": "TLS certificates",
              "href": "#synthetics:certificates"
            }
          ],
          "label": "Synthetics"
        },
        {
          "id": "uptime",
          "items": [
            {
              "id": "uptime",
              "label": "Uptime monitors",
              "href": "#uptime"
            },
            {
              "id": "uptime:Certificates",
              "label": "TLS certificates",
              "href": "#uptime:Certificates"
            }
          ],
          "label": "Uptime"
        }
      ],
      "href": "#apm:services"
    },
    {
      "id": "metrics",
      "label": "Infrastructure",
      "href": "#metrics:inventory",
      "iconType": "productCloudInfra",
      "sections": [
        {
          "id": "metrics-section-0",
          "items": [
            {
              "id": "metrics:inventory",
              "label": "Infrastructure inventory",
              "href": "#metrics:inventory"
            },
            {
              "id": "metrics:hosts",
              "label": "Hosts",
              "href": "#metrics:hosts"
            },
            {
              "id": "metrics:metrics-explorer",
              "label": "Metrics explorer",
              "href": "#metrics:metrics-explorer"
            }
          ]
        },
        {
          "id": "profiling",
          "items": [
            {
              "id": "profiling:stacktraces",
              "label": "Stacktraces",
              "href": "#profiling:stacktraces"
            },
            {
              "id": "profiling:flamegraphs",
              "label": "Flamegraphs",
              "href": "#profiling:flamegraphs"
            },
            {
              "id": "profiling:functions",
              "label": "Functions",
              "href": "#profiling:functions"
            }
          ],
          "label": "Profiling"
        }
      ]
    },
    {
      "id": "agent_builder",
      "label": "Agents",
      "href": "#agent_builder",
      "iconType": "productAgent"
    },
    {
      "id": "context_engine",
      "label": "Context",
      "href": "#context_engine",
      "iconType": "tableSparkles"
    },
    {
      "id": "machine_learning-landing",
      "label": "Machine Learning",
      "iconType": "productML",
      "sections": [
        {
          "id": "machine_learning-landing-section-0",
          "items": [
            {
              "id": "ml:overview",
              "label": "Overview",
              "href": "#ml:overview"
            },
            {
              "id": "ml:dataVisualizer",
              "label": "Data visualizer",
              "href": "#ml:dataVisualizer"
            }
          ]
        },
        {
          "id": "category-anomaly_detection",
          "items": [
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "ml:anomalyExplorer",
              "label": "Anomaly explorer",
              "href": "#ml:anomalyExplorer"
            },
            {
              "id": "ml:singleMetricViewer",
              "label": "Single metric viewer",
              "href": "#ml:singleMetricViewer"
            }
          ],
          "label": "Anomaly detection"
        },
        {
          "id": "category-data_frame analytics",
          "items": [
            {
              "id": "ml:resultExplorer",
              "label": "Result explorer",
              "href": "#ml:resultExplorer"
            },
            {
              "id": "ml:analyticsMap",
              "label": "Analytics map",
              "href": "#ml:analyticsMap"
            }
          ],
          "label": "Data frame analytics"
        },
        {
          "id": "category-aiops_labs",
          "items": [
            {
              "id": "ml:logRateAnalysis",
              "label": "Log rate analysis",
              "href": "#ml:logRateAnalysis"
            },
            {
              "id": "ml:logPatternAnalysis",
              "label": "Log pattern analysis",
              "href": "#ml:logPatternAnalysis"
            },
            {
              "id": "ml:changePointDetections",
              "label": "Change point detection",
              "href": "#ml:changePointDetections"
            }
          ],
          "label": "AIOps Labs"
        }
      ],
      "href": "#ml:overview"
    },
    {
      "id": "otherTools",
      "label": "Other tools",
      "iconType": "wrench",
      "sections": [
        {
          "id": "otherTools-links",
          "items": [
            {
              "id": "logs:anomalies",
              "label": "Logs anomalies",
              "href": "#logs:anomalies"
            },
            {
              "id": "logs:log-categories",
              "label": "Logs categories",
              "href": "#logs:log-categories"
            },
            {
              "id": "maps",
              "label": "Maps",
              "href": "#maps"
            },
            {
              "id": "graph",
              "label": "Graph",
              "href": "#graph"
            }
          ]
        }
      ],
      "href": "#logs:anomalies"
    }
  ],
  "footerItems": [
    {
      "id": "observabilityOnboarding",
      "label": "Add data",
      "href": "#observabilityOnboarding",
      "iconType": "plusCircle"
    },
    {
      "id": "devTools",
      "label": "Developer tools",
      "href": "#dev_tools",
      "iconType": "code"
    },
    {
      "id": "data_management",
      "label": "Data management",
      "iconType": "database",
      "sections": [
        {
          "id": "ingest_and_integrations",
          "items": [
            {
              "id": "integrations",
              "label": "Integrations",
              "href": "#integrations"
            },
            {
              "id": "fleet",
              "label": "Fleet",
              "href": "#fleet"
            },
            {
              "id": "management:ingest_pipelines",
              "label": "Ingest pipelines",
              "href": "#management:ingest_pipelines"
            },
            {
              "id": "management:pipelines",
              "label": "Logstash pipelines",
              "href": "#management:pipelines"
            },
            {
              "id": "management:content_connectors",
              "label": "Content connectors",
              "href": "#management:content_connectors"
            }
          ],
          "label": "Ingest and integrations"
        },
        {
          "id": "indicesAndDataStreams",
          "items": [
            {
              "id": "management:index_management",
              "label": "Index management",
              "href": "#management:index_management"
            },
            {
              "id": "management:data_federation",
              "label": "Data federation",
              "href": "#management:data_federation"
            },
            {
              "id": "management:index_lifecycle_management",
              "label": "Index lifecycle policies",
              "href": "#management:index_lifecycle_management"
            },
            {
              "id": "management:snapshot_restore",
              "label": "Snapshot and restore",
              "href": "#management:snapshot_restore"
            },
            {
              "id": "management:transform",
              "label": "Transforms",
              "href": "#management:transform"
            },
            {
              "id": "management:rollup_jobs",
              "label": "Rollup jobs",
              "href": "#management:rollup_jobs"
            },
            {
              "id": "management:esql_views",
              "label": "ES|QL views",
              "href": "#management:esql_views"
            },
            {
              "id": "management:data_quality",
              "label": "Data set quality",
              "href": "#management:data_quality"
            }
          ],
          "label": "Indices and data streams"
        }
      ],
      "href": "#integrations"
    },
    {
      "id": "stack_management",
      "label": "Stack Management",
      "iconType": "gear",
      "sections": [
        {
          "id": "stack_management_home",
          "items": [
            {
              "id": "management",
              "label": "Home",
              "href": "#management"
            },
            {
              "id": "cloud_connect",
              "label": "Cloud Connect",
              "href": "#cloud_connect"
            }
          ]
        },
        {
          "id": "alerts_and_insights",
          "items": [
            {
              "id": "management:triggersActions",
              "label": "Rules",
              "href": "#management:triggersActions"
            },
            {
              "id": "management:triggersActionsConnectors",
              "label": "Connectors",
              "href": "#management:triggersActionsConnectors"
            },
            {
              "id": "management:reporting",
              "label": "Reporting",
              "href": "#management:reporting"
            },
            {
              "id": "management:watcher",
              "label": "Watcher",
              "href": "#management:watcher"
            },
            {
              "id": "management:maintenanceWindows",
              "label": "Maintenance windows",
              "href": "#management:maintenanceWindows"
            }
          ],
          "label": "Alerts and Insights"
        },
        {
          "id": "cluster_performance",
          "items": [
            {
              "id": "monitoring",
              "label": "Stack Monitoring",
              "href": "#monitoring"
            },
            {
              "id": "management:queryActivity",
              "label": "Query activity",
              "href": "#management:queryActivity",
              "badgeType": "new"
            }
          ],
          "label": "Cluster performance"
        },
        {
          "id": "management_ml",
          "items": [
            {
              "id": "management:overview",
              "label": "Overview",
              "href": "#management:overview"
            },
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "management:analytics",
              "label": "Data frame analytics jobs",
              "href": "#management:analytics"
            },
            {
              "id": "management:trained_models",
              "label": "Trained models",
              "href": "#management:trained_models"
            },
            {
              "id": "management:supplied_configurations",
              "label": "Supplied configurations",
              "href": "#management:supplied_configurations"
            }
          ],
          "label": "Machine Learning"
        },
        {
          "id": "management_model_management",
          "items": [
            {
              "id": "management:elastic_inference_service",
              "label": "Elastic Inference Service",
              "href": "#management:elastic_inference_service"
            },
            {
              "id": "management:inference_endpoints",
              "label": "Inference endpoints",
              "href": "#management:inference_endpoints"
            },
            {
              "id": "management:model_settings",
              "label": "Model settings",
              "href": "#management:model_settings"
            }
          ],
          "label": "Model Management"
        },
        {
          "id": "management_ai",
          "items": [
            {
              "id": "management:genAiSettings",
              "label": "AI settings",
              "href": "#management:genAiSettings"
            },
            {
              "id": "management:aiAnonymizationSettings",
              "label": "Anonymization",
              "href": "#management:aiAnonymizationSettings"
            },
            {
              "id": "management:aiAssistantManagementSelection",
              "label": "AI assistants",
              "href": "#management:aiAssistantManagementSelection"
            }
          ],
          "label": "AI"
        },
        {
          "id": "security",
          "items": [
            {
              "id": "management:users",
              "label": "Users",
              "href": "#management:users"
            },
            {
              "id": "management:roles",
              "label": "Roles",
              "href": "#management:roles"
            },
            {
              "id": "management:api_keys",
              "label": "API keys",
              "href": "#management:api_keys"
            },
            {
              "id": "management:role_mappings",
              "label": "Role mappings",
              "href": "#management:role_mappings"
            },
            {
              "id": "management:service_accounts",
              "label": "Service accounts",
              "href": "#management:service_accounts"
            }
          ],
          "label": "Security"
        },
        {
          "id": "data",
          "items": [
            {
              "id": "management:cross_cluster_replication",
              "label": "Cross-cluster replication",
              "href": "#management:cross_cluster_replication"
            },
            {
              "id": "management:remote_clusters",
              "label": "Remote clusters",
              "href": "#management:remote_clusters"
            }
          ],
          "label": "Data"
        },
        {
          "id": "kibana",
          "items": [
            {
              "id": "management:filesManagement",
              "label": "Files",
              "href": "#management:filesManagement"
            },
            {
              "id": "management:objects",
              "label": "Saved objects",
              "href": "#management:objects"
            },
            {
              "id": "management:tags",
              "label": "Tags",
              "href": "#management:tags"
            },
            {
              "id": "management:spaces",
              "label": "Spaces",
              "href": "#management:spaces"
            },
            {
              "id": "management:settings",
              "label": "Advanced settings",
              "href": "#management:settings"
            },
            {
              "id": "management:dataViews",
              "label": "Data views",
              "href": "#management:dataViews"
            },
            {
              "id": "management:search_sessions",
              "label": "Search sessions",
              "href": "#management:search_sessions"
            }
          ],
          "label": "Kibana"
        }
      ],
      "href": "#management"
    }
  ]
};

// src/solution-menus/security.ts
var securityNav = {
  "primaryItems": [
    {
      "id": "inbox",
      "label": "Inbox",
      "href": "#inbox",
      "iconType": "mail"
    },
    {
      "id": "discover",
      "label": "Discover",
      "href": "#discover",
      "iconType": "productDiscover"
    },
    {
      "id": "dashboards",
      "label": "Dashboards",
      "href": "#securitySolutionUI:dashboards",
      "iconType": "productDashboard"
    },
    {
      "id": "securityGroup:rules",
      "label": "Rules",
      "iconType": "radar",
      "sections": [
        {
          "id": "securityGroup:rules-section-0",
          "items": [
            {
              "id": "rules",
              "label": "Detection rules (SIEM)",
              "href": "#securitySolutionUI:rules"
            },
            {
              "id": "cloud_security_posture-benchmarks",
              "label": "Benchmark rules",
              "href": "#securitySolutionUI:cloud_security_posture-benchmarks"
            },
            {
              "id": "exceptions",
              "label": "Shared exception lists",
              "href": "#securitySolutionUI:exceptions"
            },
            {
              "id": "alert_analysis_workflow",
              "label": "Alert analysis workflows",
              "href": "#securitySolutionUI:alert_analysis_workflow"
            }
          ],
          "label": "Management"
        },
        {
          "id": "securityGroup:rules-section-1",
          "items": [
            {
              "id": "coverage-overview",
              "label": "Coverage overview",
              "href": "#securitySolutionUI:coverage-overview"
            }
          ],
          "label": "Discover"
        }
      ],
      "href": "#securitySolutionUI:rules"
    },
    {
      "id": "alerts",
      "label": "Alerts",
      "href": "#securitySolutionUI:alerts",
      "iconType": "warning"
    },
    {
      "id": "workflows",
      "label": "Workflows",
      "href": "#workflows:list",
      "iconType": "workflow",
      "sections": [
        {
          "id": "workflows-links",
          "items": [
            {
              "id": "workflows:list",
              "label": "Workflows",
              "href": "#workflows:list"
            },
            {
              "id": "workflows:executions",
              "label": "Executions",
              "href": "#workflows:executions"
            },
            {
              "id": "workflows:library",
              "label": "Workflow templates",
              "href": "#workflows:library"
            }
          ]
        }
      ]
    },
    {
      "id": "agent_builder",
      "label": "Agents",
      "href": "#agent_builder",
      "iconType": "productAgent"
    },
    {
      "id": "context_engine",
      "label": "Context",
      "href": "#context_engine",
      "iconType": "tableSparkles"
    },
    {
      "id": "attack_discovery",
      "label": "Attack discovery",
      "href": "#securitySolutionUI:attack_discovery",
      "iconType": "bolt"
    },
    {
      "id": "cloud_security_posture-findings",
      "label": "Findings",
      "href": "#securitySolutionUI:cloud_security_posture-findings",
      "iconType": "bullseye"
    },
    {
      "id": "cases",
      "label": "Cases",
      "href": "#securitySolutionUI:cases",
      "iconType": "briefcase"
    },
    {
      "id": "entity_analytics-home_page",
      "label": "Entity analytics",
      "href": "#securitySolutionUI:entity_analytics-home_page",
      "badgeType": "new",
      "iconType": "chartBarVerticalStack"
    },
    {
      "id": "securityGroup:explore",
      "label": "Explore",
      "iconType": "globe",
      "sections": [
        {
          "id": "securityGroup:explore-links",
          "items": [
            {
              "id": "hosts",
              "label": "Hosts",
              "href": "#securitySolutionUI:hosts"
            },
            {
              "id": "network",
              "label": "Network",
              "href": "#securitySolutionUI:network"
            },
            {
              "id": "users",
              "label": "Users",
              "href": "#securitySolutionUI:users"
            }
          ]
        }
      ],
      "href": "#securitySolutionUI:hosts"
    },
    {
      "id": "securityGroup:investigations",
      "label": "Investigations",
      "iconType": "inspect",
      "sections": [
        {
          "id": "securityGroup:investigations-links",
          "items": [
            {
              "id": "timelines",
              "label": "Timelines",
              "href": "#securitySolutionUI:timelines"
            },
            {
              "id": "notes",
              "label": "Notes",
              "href": "#securitySolutionUI:notes"
            },
            {
              "id": "osquery",
              "label": "Osquery",
              "href": "#osquery"
            }
          ]
        }
      ],
      "href": "#securitySolutionUI:timelines"
    },
    {
      "id": "threat_intelligence",
      "label": "Intelligence",
      "href": "#securitySolutionUI:threat_intelligence",
      "iconType": "processor"
    },
    {
      "id": "asset_inventory",
      "label": "Inventory",
      "href": "#securitySolutionUI:asset_inventory",
      "iconType": "listCheck"
    },
    {
      "id": "securityGroup:assets",
      "label": "Assets",
      "iconType": "display",
      "sections": [
        {
          "id": "securityGroup:assets-section-0",
          "items": [
            {
              "id": "fleet:agents",
              "label": "Agents",
              "href": "#fleet:agents"
            },
            {
              "id": "fleet:policies",
              "label": "Policies",
              "href": "#fleet:policies"
            },
            {
              "id": "fleet:enrollment_tokens",
              "label": "Enrollment tokens",
              "href": "#fleet:enrollment_tokens"
            },
            {
              "id": "fleet:uninstall_tokens",
              "label": "Uninstall tokens",
              "href": "#fleet:uninstall_tokens"
            },
            {
              "id": "fleet:data_streams",
              "label": "Data streams",
              "href": "#fleet:data_streams"
            },
            {
              "id": "fleet:settings",
              "label": "Settings",
              "href": "#fleet:settings"
            }
          ],
          "label": "Fleet"
        },
        {
          "id": "endpoints",
          "items": [
            {
              "id": "endpoints",
              "label": "Endpoints",
              "href": "#securitySolutionUI:endpoints"
            },
            {
              "id": "policy",
              "label": "Policies",
              "href": "#securitySolutionUI:policy"
            },
            {
              "id": "artifacts",
              "label": "Artifacts",
              "href": "#securitySolutionUI:artifacts"
            },
            {
              "id": "response_actions_history",
              "label": "Response actions history",
              "href": "#securitySolutionUI:response_actions_history"
            },
            {
              "id": "script_library",
              "label": "Scripts",
              "href": "#securitySolutionUI:script_library"
            }
          ],
          "label": "Endpoints"
        }
      ],
      "href": "#fleet:agents"
    },
    {
      "id": "securityGroup:machineLearning",
      "label": "Machine Learning",
      "iconType": "productML",
      "sections": [
        {
          "id": "securityGroup:machineLearning-section-0",
          "items": [
            {
              "id": "ml:overview",
              "label": "Overview",
              "href": "#ml:overview"
            },
            {
              "id": "ml:dataVisualizer",
              "label": "Data visualizer",
              "href": "#ml:dataVisualizer"
            }
          ]
        },
        {
          "id": "securityGroup:machineLearning-section-1",
          "items": [
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "ml:anomalyExplorer",
              "label": "Anomaly explorer",
              "href": "#ml:anomalyExplorer"
            },
            {
              "id": "ml:singleMetricViewer",
              "label": "Single metric viewer",
              "href": "#ml:singleMetricViewer"
            }
          ],
          "label": "Anomaly detection"
        },
        {
          "id": "securityGroup:machineLearning-section-2",
          "items": [
            {
              "id": "ml:resultExplorer",
              "label": "Result explorer",
              "href": "#ml:resultExplorer"
            },
            {
              "id": "ml:analyticsMap",
              "label": "Analytics map",
              "href": "#ml:analyticsMap"
            }
          ],
          "label": "Data frame analytics"
        },
        {
          "id": "securityGroup:machineLearning-section-3",
          "items": [
            {
              "id": "ml:logRateAnalysis",
              "label": "Log rate analysis",
              "href": "#ml:logRateAnalysis"
            },
            {
              "id": "ml:logPatternAnalysis",
              "label": "Log pattern analysis",
              "href": "#ml:logPatternAnalysis"
            },
            {
              "id": "ml:changePointDetections",
              "label": "Change point detection",
              "href": "#ml:changePointDetections"
            }
          ],
          "label": "AIOps labs"
        }
      ],
      "href": "#ml:overview"
    }
  ],
  "footerItems": [
    {
      "id": "launchpad",
      "label": "Launchpad",
      "iconType": "rocket",
      "sections": [
        {
          "id": "launchpad-section-0",
          "items": [
            {
              "id": "get_started",
              "label": "Get started",
              "href": "#securitySolutionUI:get_started"
            },
            {
              "id": "siem_readiness",
              "label": "SIEM readiness",
              "href": "#securitySolutionUI:siem_readiness",
              "badgeType": "new"
            },
            {
              "id": "ai_value",
              "label": "Value report",
              "href": "#securitySolutionUI:ai_value"
            }
          ]
        },
        {
          "id": "launchpad-section-1",
          "items": [
            {
              "id": "siem_migrations-manage",
              "label": "Migration overview",
              "href": "#securitySolutionUI:siem_migrations-manage"
            },
            {
              "id": "siem_migrations-rules",
              "label": "Rules",
              "href": "#securitySolutionUI:siem_migrations-rules"
            },
            {
              "id": "siem_migrations-dashboards",
              "label": "Dashboards",
              "href": "#securitySolutionUI:siem_migrations-dashboards"
            }
          ],
          "label": "Migrations"
        }
      ],
      "href": "#securitySolutionUI:get_started"
    },
    {
      "id": "dev_tools",
      "label": "Developer tools",
      "href": "#dev_tools",
      "iconType": "code"
    },
    {
      "id": "data_management",
      "label": "Data management",
      "iconType": "database",
      "sections": [
        {
          "id": "data_management-section-0",
          "items": [
            {
              "id": "integrations",
              "label": "Integrations",
              "href": "#integrations"
            },
            {
              "id": "management:ingest_pipelines",
              "label": "Ingest pipelines",
              "href": "#management:ingest_pipelines"
            },
            {
              "id": "management:pipelines",
              "label": "Logstash pipelines",
              "href": "#management:pipelines"
            },
            {
              "id": "management:content_connectors",
              "label": "Content connectors",
              "href": "#management:content_connectors"
            }
          ],
          "label": "Ingest and Integrations"
        },
        {
          "id": "data_management-section-1",
          "items": [
            {
              "id": "streams",
              "label": "Streams",
              "href": "#streams"
            },
            {
              "id": "management:index_management",
              "label": "Index management",
              "href": "#management:index_management"
            },
            {
              "id": "management:data_federation",
              "label": "Data federation",
              "href": "#management:data_federation"
            },
            {
              "id": "management:index_lifecycle_management",
              "label": "Index lifecycle policies",
              "href": "#management:index_lifecycle_management"
            },
            {
              "id": "management:snapshot_restore",
              "label": "Snapshot and restore",
              "href": "#management:snapshot_restore"
            },
            {
              "id": "management:transform",
              "label": "Transforms",
              "href": "#management:transform"
            },
            {
              "id": "management:rollup_jobs",
              "label": "Rollup jobs",
              "href": "#management:rollup_jobs"
            },
            {
              "id": "management:esql_views",
              "label": "ES|QL views",
              "href": "#management:esql_views"
            },
            {
              "id": "management:data_quality",
              "label": "Data set quality",
              "href": "#management:data_quality"
            }
          ],
          "label": "Indices and data streams"
        }
      ],
      "href": "#integrations"
    },
    {
      "id": "stack_management",
      "label": "Stack Management",
      "iconType": "gear",
      "sections": [
        {
          "id": "stack_management_home",
          "items": [
            {
              "id": "management",
              "label": "Home",
              "href": "#management"
            },
            {
              "id": "cloud_connect",
              "label": "Cloud Connect",
              "href": "#cloud_connect"
            }
          ]
        },
        {
          "id": "stack_management-section-1",
          "items": [
            {
              "id": "stackRules",
              "label": "Rules",
              "href": "#management:triggersActions"
            },
            {
              "id": "management:cases",
              "label": "Cases",
              "href": "#management:cases"
            },
            {
              "id": "management:triggersActionsConnectors",
              "label": "Connectors",
              "href": "#management:triggersActionsConnectors"
            },
            {
              "id": "management:reporting",
              "label": "Reporting",
              "href": "#management:reporting"
            },
            {
              "id": "management:jobsListLink",
              "label": "Jobs",
              "href": "#management:jobsListLink"
            },
            {
              "id": "management:watcher",
              "label": "Watcher",
              "href": "#management:watcher"
            },
            {
              "id": "management:maintenanceWindows",
              "label": "Maintenance windows",
              "href": "#management:maintenanceWindows"
            },
            {
              "id": "entity_analytics-management",
              "label": "Entity analytics management",
              "href": "#securitySolutionUI:entity_analytics-management"
            }
          ],
          "label": "Alerts and Insights"
        },
        {
          "id": "stack_management-section-2",
          "items": [
            {
              "id": "monitoring",
              "label": "Stack Monitoring",
              "href": "#monitoring"
            },
            {
              "id": "management:queryActivity",
              "label": "Query activity",
              "href": "#management:queryActivity",
              "badgeType": "new"
            }
          ],
          "label": "Cluster performance"
        },
        {
          "id": "stack_management-section-3",
          "items": [
            {
              "id": "management:overview",
              "label": "Overview",
              "href": "#management:overview"
            },
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "management:analytics",
              "label": "Data frame analytics jobs",
              "href": "#management:analytics"
            },
            {
              "id": "management:trained_models",
              "label": "Trained models",
              "href": "#management:trained_models"
            },
            {
              "id": "management:supplied_configurations",
              "label": "Supplied configurations",
              "href": "#management:supplied_configurations"
            }
          ],
          "label": "Machine Learning"
        },
        {
          "id": "stack_management-section-4",
          "items": [
            {
              "id": "management:elastic_inference_service",
              "label": "Elastic Inference Service",
              "href": "#management:elastic_inference_service"
            },
            {
              "id": "management:inference_endpoints",
              "label": "Inference endpoints",
              "href": "#management:inference_endpoints"
            },
            {
              "id": "management:model_settings",
              "label": "Model settings",
              "href": "#management:model_settings"
            }
          ],
          "label": "Model Management"
        },
        {
          "id": "stack_management-section-5",
          "items": [
            {
              "id": "management:genAiSettings",
              "label": "AI settings",
              "href": "#management:genAiSettings"
            },
            {
              "id": "management:aiAnonymizationSettings",
              "label": "Anonymization",
              "href": "#management:aiAnonymizationSettings"
            },
            {
              "id": "management:evals",
              "label": "Evaluations",
              "href": "#management:evals"
            },
            {
              "id": "management:aiAssistantManagementSelection",
              "label": "AI assistants",
              "href": "#management:aiAssistantManagementSelection"
            }
          ],
          "label": "AI"
        },
        {
          "id": "stack_management-section-6",
          "items": [
            {
              "id": "management:users",
              "label": "Users",
              "href": "#management:users"
            },
            {
              "id": "management:roles",
              "label": "Roles",
              "href": "#management:roles"
            },
            {
              "id": "management:api_keys",
              "label": "API keys",
              "href": "#management:api_keys"
            },
            {
              "id": "management:role_mappings",
              "label": "Role mappings",
              "href": "#management:role_mappings"
            },
            {
              "id": "management:service_accounts",
              "label": "Service accounts",
              "href": "#management:service_accounts"
            }
          ],
          "label": "Security"
        },
        {
          "id": "stack_management-section-7",
          "items": [
            {
              "id": "management:cross_cluster_replication",
              "label": "Cross-cluster replication",
              "href": "#management:cross_cluster_replication"
            },
            {
              "id": "management:remote_clusters",
              "label": "Remote clusters",
              "href": "#management:remote_clusters"
            },
            {
              "id": "management:migrate_data",
              "label": "Migrate data",
              "href": "#management:migrate_data"
            }
          ],
          "label": "Data"
        },
        {
          "id": "stack_management-section-8",
          "items": [
            {
              "id": "management:dataViews",
              "label": "Data views",
              "href": "#management:dataViews"
            },
            {
              "id": "management:filesManagement",
              "label": "Files",
              "href": "#management:filesManagement"
            },
            {
              "id": "management:objects",
              "label": "Saved objects",
              "href": "#management:objects"
            },
            {
              "id": "management:tags",
              "label": "Tags",
              "href": "#management:tags"
            },
            {
              "id": "management:search_sessions",
              "label": "Search sessions",
              "href": "#management:search_sessions"
            },
            {
              "id": "management:spaces",
              "label": "Spaces",
              "href": "#management:spaces"
            },
            {
              "id": "maps",
              "label": "Maps",
              "href": "#maps"
            },
            {
              "id": "graph",
              "label": "Graph",
              "href": "#graph"
            },
            {
              "id": "canvas",
              "label": "Canvas",
              "href": "#canvas"
            },
            {
              "id": "management:settings",
              "label": "Advanced settings",
              "href": "#management:settings"
            }
          ],
          "label": "Kibana"
        },
        {
          "id": "stack_management-section-9",
          "items": [
            {
              "id": "management:license_management",
              "label": "License management",
              "href": "#management:license_management"
            },
            {
              "id": "management:upgrade_assistant",
              "label": "Upgrade Assistant",
              "href": "#management:upgrade_assistant"
            }
          ],
          "label": "Stack"
        }
      ],
      "href": "#management"
    }
  ]
};

// src/solution-menus/search.ts
var searchNav = {
  "primaryItems": [
    {
      "id": "searchHomepage",
      "label": "Home",
      "href": "#searchHomepage",
      "iconType": "home"
    },
    {
      "id": "agent_builder",
      "label": "Agents",
      "href": "#agent_builder",
      "iconType": "productAgent"
    },
    {
      "id": "context_engine",
      "label": "Context",
      "href": "#context_engine",
      "iconType": "tableSparkles"
    },
    {
      "id": "discover",
      "label": "Discover",
      "href": "#discover",
      "iconType": "productDiscover"
    },
    {
      "id": "dashboards",
      "label": "Dashboards",
      "href": "#dashboards",
      "iconType": "productDashboard"
    },
    {
      "id": "workflows",
      "label": "Workflows",
      "href": "#workflows:list",
      "iconType": "workflow",
      "sections": [
        {
          "id": "workflows-links",
          "items": [
            {
              "id": "workflows:list",
              "label": "Workflows",
              "href": "#workflows:list"
            },
            {
              "id": "workflows:executions",
              "label": "Executions",
              "href": "#workflows:executions"
            },
            {
              "id": "workflows:library",
              "label": "Workflow templates",
              "href": "#workflows:library"
            }
          ]
        }
      ]
    },
    {
      "id": "machine_learning",
      "label": "Machine Learning",
      "iconType": "productML",
      "sections": [
        {
          "id": "ml_overview",
          "items": [
            {
              "id": "ml:overview",
              "label": "Overview",
              "href": "#ml:overview"
            },
            {
              "id": "ml:dataVisualizer",
              "label": "Data visualizer",
              "href": "#ml:dataVisualizer"
            }
          ]
        },
        {
          "id": "category-anomaly_detection",
          "items": [
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "ml:anomalyExplorer",
              "label": "Anomaly explorer",
              "href": "#ml:anomalyExplorer"
            },
            {
              "id": "ml:singleMetricViewer",
              "label": "Single metric viewer",
              "href": "#ml:singleMetricViewer"
            }
          ],
          "label": "Anomaly detection"
        },
        {
          "id": "category-data_frame analytics",
          "items": [
            {
              "id": "ml:resultExplorer",
              "label": "Result explorer",
              "href": "#ml:resultExplorer"
            },
            {
              "id": "ml:analyticsMap",
              "label": "Analytics map",
              "href": "#ml:analyticsMap"
            }
          ],
          "label": "Data frame analytics"
        },
        {
          "id": "category-aiops_labs",
          "items": [
            {
              "id": "ml:logRateAnalysis",
              "label": "Log rate analysis",
              "href": "#ml:logRateAnalysis"
            },
            {
              "id": "ml:logPatternAnalysis",
              "label": "Log pattern analysis",
              "href": "#ml:logPatternAnalysis"
            },
            {
              "id": "ml:changePointDetections",
              "label": "Change point detection",
              "href": "#ml:changePointDetections"
            }
          ],
          "label": "AIOps labs"
        }
      ],
      "href": "#ml:overview"
    },
    {
      "id": "data_management",
      "label": "Data management",
      "iconType": "database",
      "sections": [
        {
          "id": "data_management-section-0",
          "items": [
            {
              "id": "management:index_management",
              "label": "Index management",
              "href": "#management:index_management"
            },
            {
              "id": "management:data_federation",
              "label": "Data federation",
              "href": "#management:data_federation"
            },
            {
              "id": "management:esql_views",
              "label": "ES|QL views",
              "href": "#management:esql_views"
            },
            {
              "id": "management:index_lifecycle_management",
              "label": "Index lifecycle policies",
              "href": "#management:index_lifecycle_management"
            },
            {
              "id": "management:snapshot_restore",
              "label": "Snapshot and restore",
              "href": "#management:snapshot_restore"
            },
            {
              "id": "management:transform",
              "label": "Transforms",
              "href": "#management:transform"
            },
            {
              "id": "management:rollup_jobs",
              "label": "Rollup jobs",
              "href": "#management:rollup_jobs"
            }
          ],
          "label": "Indices and data streams"
        },
        {
          "id": "data_management-section-1",
          "items": [
            {
              "id": "management:ingest_pipelines",
              "label": "Ingest pipelines",
              "href": "#management:ingest_pipelines"
            },
            {
              "id": "management:pipelines",
              "label": "Logstash pipelines",
              "href": "#management:pipelines"
            }
          ],
          "label": "Ingest"
        },
        {
          "id": "search_relevance",
          "items": [
            {
              "id": "searchSynonyms:synonyms",
              "label": "Synonyms",
              "href": "#searchSynonyms:synonyms"
            },
            {
              "id": "searchQueryRules",
              "label": "Query rules",
              "href": "#searchQueryRules"
            }
          ],
          "label": "Relevance"
        }
      ],
      "href": "#management:index_management"
    }
  ],
  "footerItems": [
    {
      "id": "search_getting_started",
      "label": "Get started",
      "href": "#searchGettingStarted",
      "iconType": "rocket"
    },
    {
      "id": "dev_tools",
      "label": "Developer Tools",
      "href": "#dev_tools",
      "iconType": "code"
    },
    {
      "id": "stack_management",
      "label": "Stack Management",
      "iconType": "managementApp",
      "sections": [
        {
          "id": "stack_management_home",
          "items": [
            {
              "id": "management",
              "label": "Home",
              "href": "#management"
            },
            {
              "id": "cloud_connect",
              "label": "Cloud Connect",
              "href": "#cloud_connect"
            }
          ]
        },
        {
          "id": "alerts_and_insights",
          "items": [
            {
              "id": "management:triggersActionsAlerts",
              "label": "Alerts",
              "href": "#management:triggersActionsAlerts"
            },
            {
              "id": "management:triggersActions",
              "label": "Rules",
              "href": "#management:triggersActions"
            },
            {
              "id": "management:triggersActionsConnectors",
              "label": "Connectors",
              "href": "#management:triggersActionsConnectors"
            },
            {
              "id": "management:reporting",
              "label": "Reporting",
              "href": "#management:reporting"
            },
            {
              "id": "management:jobsListLink",
              "label": "Jobs",
              "href": "#management:jobsListLink"
            },
            {
              "id": "management:watcher",
              "label": "Watcher",
              "href": "#management:watcher"
            },
            {
              "id": "management:maintenanceWindows",
              "label": "Maintenance windows",
              "href": "#management:maintenanceWindows"
            }
          ],
          "label": "Alerts and Insights"
        },
        {
          "id": "stack_management-section-2",
          "items": [
            {
              "id": "monitoring",
              "label": "Stack Monitoring",
              "href": "#monitoring"
            },
            {
              "id": "management:queryActivity",
              "label": "Query activity",
              "href": "#management:queryActivity",
              "badgeType": "new"
            }
          ],
          "label": "Cluster performance"
        },
        {
          "id": "stack_management-section-3",
          "items": [
            {
              "id": "management:overview",
              "label": "Overview",
              "href": "#management:overview"
            },
            {
              "id": "management:trained_models",
              "label": "Trained models",
              "href": "#management:trained_models"
            },
            {
              "id": "management:anomaly_detection",
              "label": "Manage jobs",
              "href": "#management:anomaly_detection"
            },
            {
              "id": "management:analytics",
              "label": "Data frame analytics jobs",
              "href": "#management:analytics"
            }
          ],
          "label": "Machine Learning"
        },
        {
          "id": "stack_management-section-4",
          "items": [
            {
              "id": "management:elastic_inference_service",
              "label": "Elastic Inference Service",
              "href": "#management:elastic_inference_service"
            },
            {
              "id": "management:inference_endpoints",
              "label": "Inference endpoints",
              "href": "#management:inference_endpoints"
            },
            {
              "id": "management:model_settings",
              "label": "Model settings",
              "href": "#management:model_settings"
            }
          ],
          "label": "Model Management"
        },
        {
          "id": "stack_management-section-5",
          "items": [
            {
              "id": "management:genAiSettings",
              "label": "AI settings",
              "href": "#management:genAiSettings"
            },
            {
              "id": "management:aiAnonymizationSettings",
              "label": "Anonymization",
              "href": "#management:aiAnonymizationSettings"
            },
            {
              "id": "management:evals",
              "label": "Evaluations",
              "href": "#management:evals"
            },
            {
              "id": "management:aiAssistantManagementSelection",
              "label": "AI assistants",
              "href": "#management:aiAssistantManagementSelection"
            }
          ],
          "label": "AI"
        },
        {
          "id": "stack_management-section-6",
          "items": [
            {
              "id": "management:users",
              "label": "Users",
              "href": "#management:users"
            },
            {
              "id": "management:roles",
              "label": "Roles",
              "href": "#management:roles"
            },
            {
              "id": "management:api_keys",
              "label": "API keys",
              "href": "#management:api_keys"
            },
            {
              "id": "management:role_mappings",
              "label": "Role mappings",
              "href": "#management:role_mappings"
            },
            {
              "id": "management:service_accounts",
              "label": "Service accounts",
              "href": "#management:service_accounts"
            }
          ],
          "label": "Security"
        },
        {
          "id": "stack_management-section-7",
          "items": [
            {
              "id": "management:cross_cluster_replication",
              "label": "Cross-cluster replication",
              "href": "#management:cross_cluster_replication"
            },
            {
              "id": "management:remote_clusters",
              "label": "Remote clusters",
              "href": "#management:remote_clusters"
            }
          ],
          "label": "Data"
        },
        {
          "id": "stack_management-section-8",
          "items": [
            {
              "id": "management:dataViews",
              "label": "Data views",
              "href": "#management:dataViews"
            },
            {
              "id": "management:filesManagement",
              "label": "Files",
              "href": "#management:filesManagement"
            },
            {
              "id": "management:objects",
              "label": "Saved objects",
              "href": "#management:objects"
            },
            {
              "id": "management:tags",
              "label": "Tags",
              "href": "#management:tags"
            },
            {
              "id": "management:search_sessions",
              "label": "Search sessions",
              "href": "#management:search_sessions"
            },
            {
              "id": "management:spaces",
              "label": "Spaces",
              "href": "#management:spaces"
            },
            {
              "id": "management:settings",
              "label": "Advanced settings",
              "href": "#management:settings"
            }
          ],
          "label": "Kibana"
        },
        {
          "id": "stack_management-section-9",
          "items": [
            {
              "id": "management:license_management",
              "label": "License management",
              "href": "#management:license_management"
            },
            {
              "id": "management:upgrade_assistant",
              "label": "Upgrade Assistant",
              "href": "#management:upgrade_assistant"
            }
          ],
          "label": "Stack"
        }
      ],
      "href": "#management"
    }
  ]
};

// src/solution-menus/shared.ts
var link = (id, label) => ({ id, label, href: `#${id}` });
var item = (id, label, iconType) => ({ ...link(id, label), iconType });
var section = (id, label, pairs) => ({ id, label, items: pairs.map(([id2, label2]) => link(id2, label2)) });
var panel = (id, label, iconType, sections) => ({
  ...item(id, label, iconType),
  href: sections[0]?.items[0]?.href ?? `#${id}`,
  sections
});

// src/solution-menus/classic.ts
var classicNav = {
  primaryItems: [
    item("home", "Home", "home"),
    panel("kibana", "Analytics", "logoKibana", [section("analytics", void 0, [["discover", "Discover"], ["dashboards", "Dashboards"], ["visualize", "Visualize Library"], ["maps", "Maps"], ["canvas", "Canvas"], ["graph", "Graph"], ["ml", "Machine Learning"]])]),
    panel("enterpriseSearch", "Elasticsearch", "logoElasticsearch", [section("search", void 0, [["searchHomepage", "Overview"], ["agent_builder", "Agents"], ["context_engine", "Context"]])]),
    panel("observability", "Observability", "logoObservability", [section("observability", void 0, [["observability-overview", "Overview"], ["logs", "Logs"], ["apm", "APM"], ["metrics", "Infrastructure"], ["synthetics", "Synthetics"], ["uptime", "Uptime"], ["slo", "SLOs"], ["observability-overview:alerts", "Alerts"], ["observability-overview:cases", "Cases"]])]),
    panel("securitySolution", "Security", "logoSecurity", [section("security", void 0, [["securitySolutionUI:launchpad", "Overview"], ["securitySolutionUI:dashboards", "Dashboards"], ["securitySolutionUI:alerts", "Alerts"], ["securitySolutionUI:cases", "Cases"]])]),
    panel("management", "Management", "managementApp", [section("management", void 0, [["dev_tools", "Dev Tools"], ["monitoring", "Stack Monitoring"], ["fleet", "Fleet"], ["management", "Stack Management"]])])
  ],
  footerItems: [item("integrations", "Add integrations", "plusCircle")]
};

// src/solution-menus/index.ts
var solutionNavTrees = {
  observability: observabilityNav,
  security: securityNav,
  search: searchNav,
  classic: classicNav
};
function getSolutionNav(solution, overrides, getHref) {
  const defaults = structuredClone(solutionNavTrees[solution]);
  const nav = typeof overrides === "function" ? overrides(defaults) : { ...defaults, ...overrides };
  if (!getHref) return nav;
  const mapItems = (items) => items.map((item2) => ({
    ...item2,
    href: getHref(item2.id),
    ...Object.fromEntries(["sections", "popoverSections"].filter((key) => item2[key]).map((key) => [
      key,
      item2[key].map((section2) => ({ ...section2, items: section2.items.map((link2) => ({ ...link2, href: getHref(link2.id) })) }))
    ]))
  }));
  return {
    primaryItems: mapItems(nav.primaryItems),
    footerItems: mapItems(nav.footerItems),
    ...nav.overflowItems ? { overflowItems: mapItems(nav.overflowItems) } : {}
  };
}

export {
  observabilityNav,
  securityNav,
  searchNav,
  classicNav,
  solutionNavTrees,
  getSolutionNav
};
//# sourceMappingURL=chunk-GWFHTNQL.js.map
