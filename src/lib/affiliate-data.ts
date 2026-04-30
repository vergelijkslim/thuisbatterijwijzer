import { registerLinks, type AffiliateLink } from './affiliates';

const links: AffiliateLink[] = [
  {
    id: 'thuisbatterij-offerte',
    network: 'direct',
    merchant: 'Thuisbatterij.nl',
    url: 'https://www.thuisbatterij.nl/',
    niche: 'thuisbatterij',
    label: 'Vergelijk thuisbatterijen',
    commissionType: 'cpa',
    commissionValue: '€50-€150 per lead (na TradeTracker registratie)',
  },
  {
    id: 'zonnepanelen-offerte',
    network: 'direct',
    merchant: 'Offerteadviseur',
    url: 'https://www.offerteadviseur.nl/zonnepanelen/',
    niche: 'thuisbatterij',
    label: 'Gratis offertes aanvragen',
    commissionType: 'cpa',
    commissionValue: '€40-€120 per lead (na Daisycon registratie)',
  },
  {
    id: 'energieleverancier-vergelijk',
    network: 'direct',
    merchant: 'Energievergelijken.nl',
    url: 'https://www.energievergelijken.nl/',
    niche: 'thuisbatterij',
    label: 'Vergelijk energieleveranciers',
    commissionType: 'cpa',
    commissionValue: '€30-€80 per overstap (na Daisycon registratie)',
  },
  {
    id: 'subsidie-check',
    network: 'direct',
    merchant: 'Verbeterjehuis / Milieu Centraal',
    url: 'https://www.verbeterjehuis.nl/energiesubsidiewijzer/',
    niche: 'thuisbatterij',
    label: 'Check jouw subsidie',
    commissionType: 'cpa',
    commissionValue: 'geen commissie (informatief)',
  },
  {
    id: 'energieopslag-vergelijk',
    network: 'direct',
    merchant: 'Thuisbatterij.nl',
    url: 'https://www.thuisbatterij.nl/vergelijken/',
    niche: 'thuisbatterij',
    label: 'Vergelijk energieopslag systemen',
    commissionType: 'cpa',
    commissionValue: '€50-€150 per lead (na TradeTracker registratie)',
  },
  // Amazon PartnerNet (tag: vergelijk05-21)
  // Note: use /dp/ASIN URLs so links go to specific product pages, not search results.
  // Tag is appended dynamically by buildTrackingUrl().
  {
    id: 'amazon-ecoflow-river2',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B0BFWVPWT3', // EcoFlow RIVER 2 portable powerstation
    niche: 'thuisbatterij',
    label: 'EcoFlow RIVER 2 powerstation bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
  {
    id: 'amazon-energie-monitor',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B0BDF5DX3N', // Shelly Pro 3EM energie monitor
    niche: 'thuisbatterij',
    label: 'Shelly Pro 3EM energie monitor bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
  {
    id: 'amazon-victron-smartshunt',
    network: 'amazon',
    merchant: 'Amazon.nl',
    url: 'https://www.amazon.nl/dp/B07W9P3HP6', // Victron Energy SmartShunt 500A batterij monitor
    niche: 'thuisbatterij',
    label: 'Victron SmartShunt batterijmonitor bij Amazon',
    commissionType: 'cps',
    commissionValue: '3-10% per verkoop',
  },
];

registerLinks(links);

export default links;
