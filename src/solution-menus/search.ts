/* Copyright Elasticsearch B.V. Licensed under Elastic License 2.0.
 * Modified: standalone snapshot of the real Kibana navigation tree. See SOURCES.md. */
import type { SolutionNav } from './types';
export const searchNav: SolutionNav = {
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
