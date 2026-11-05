/* Copyright Elasticsearch B.V. Licensed under Elastic License 2.0.
 * Modified: standalone snapshot of the real Kibana navigation tree. See SOURCES.md. */
import type { SolutionNav } from './types';
export const securityNav: SolutionNav = {
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
