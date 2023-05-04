locals {
  # effectively, this is goodnews.apis.holi.social
  goodnews_api_environments_zone_dns_name = "goodnews.${data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_domain}."
}

# goodnews api environments zone
resource "google_dns_managed_zone" "goodnews_api_environments_zone" {
  project  = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name     = "goodnews-api-holi-social-environments-zone"
  dns_name = local.goodnews_api_environments_zone_dns_name
}

resource "google_dns_record_set" "goodnews_api_environments_zone_entry" {
  project = data.terraform_remote_state.holi_infra_state.outputs.shared_project_id
  name    = local.goodnews_api_environments_zone_dns_name
  type    = "NS"
  ttl     = 300

  managed_zone = data.terraform_remote_state.holi_infra_state.outputs.dns_apis_zone_name

  rrdatas = google_dns_managed_zone.goodnews_api_environments_zone.name_servers
}

output "dns_goodnews_api_domain" {
  value = trim(google_dns_managed_zone.goodnews_api_environments_zone.dns_name, ".")
}

output "dns_goodnews_api_domain_name" {
  value = google_dns_managed_zone.goodnews_api_environments_zone.name
}
