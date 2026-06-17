"use client";

import { useMemo, useState } from "react";
import type { Locale, Region, Site } from "@/lib/sites";
import { REGION_LABEL, REGION_ORDER } from "@/lib/sites";
import { UI } from "@/lib/i18n";
import SiteCard from "./site-card";

interface RegionCatalogProps {
  sites: Site[];
  locale: Locale;
}

type Filter = "all" | Region;

// 지역 필터 탭 + 카드 그리드. 탭은 알약(pill) 형태, 선택 시 단일 액센트.
export default function RegionCatalog({ sites, locale }: RegionCatalogProps) {
  const t = UI[locale];
  const [filter, setFilter] = useState<Filter>("all");

  // 실제 데이터에 존재하는 지역만 탭으로 노출
  const regions = useMemo(
    () => REGION_ORDER.filter((r) => sites.some((s) => s.region === r)),
    [sites]
  );

  const visible = useMemo(
    () => (filter === "all" ? sites : sites.filter((s) => s.region === filter)),
    [sites, filter]
  );

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: t.allRegions },
    ...regions.map((r) => ({ key: r, label: REGION_LABEL[r][locale] })),
  ];

  return (
    <section className="mx-auto max-w-content px-5 pb-24 sm:px-6">
      <h2
        className="text-ink"
        style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.14, letterSpacing: "-0.01em" }}
      >
        {t.exploreRegion}
      </h2>

      {/* 필터 탭 */}
      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label={t.exploreRegion}>
        {tabs.map((tab) => {
          const active = filter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(tab.key)}
              className={`rounded-pill transition-colors duration-200 ${
                active ? "bg-primary text-white" : "bg-surface text-ink-muted hover:bg-white"
              }`}
              style={{ padding: "8px 16px", fontSize: "14px", fontWeight: active ? 600 : 400 }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 카드 그리드 */}
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((site) => (
          <SiteCard key={site.slug} site={site} locale={locale} />
        ))}
      </div>
    </section>
  );
}
