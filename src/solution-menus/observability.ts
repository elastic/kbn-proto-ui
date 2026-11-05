/* Copyright Elasticsearch B.V. Licensed under Elastic License 2.0.
 * Modified: standalone snapshot of the real Kibana navigation tree. See SOURCES.md. */
import type { SolutionNav } from './types';
export const observabilityNav: SolutionNav = {
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
