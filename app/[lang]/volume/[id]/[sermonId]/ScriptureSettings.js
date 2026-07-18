"use client";

import { useBibleSettings } from '../../../../components/BibleSettingsProvider';

export default function ScriptureSettings({ dict }) {
  const { integrationEnabled, setIntegrationEnabled, tooltipTranslation, setTooltipTranslation } = useBibleSettings();

  return (
    <div className="scripture-settings-inline" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <label className="toolbar-toggle" title={dict ? dict.reader.tools.settings : "Enable Bible Links"}>
        <input 
          type="checkbox" 
          checked={integrationEnabled}
          onChange={(e) => setIntegrationEnabled(e.target.checked)}
        />
        <span className="toolbar-toggle-slider"></span>
        <span className="toolbar-toggle-label">{dict ? dict.reader.tools.settings : "Bible Links"}</span>
      </label>
      
      {integrationEnabled && (
        <select 
          className="toolbar-select"
          value={tooltipTranslation}
          onChange={(e) => setTooltipTranslation(e.target.value)}
          title={dict ? dict.reader.tools.translation : "Translation for verses"}
          style={{ padding: '0.4rem 0.6rem', background: 'var(--surface-hover)', border: '1px solid var(--border)', borderRadius: '6px', color: 'var(--text)', fontSize: '0.9rem', minWidth: '140px' }}
        >
          <option value="kjv">KJV</option>
          <option value="asv">ASV</option>
          <option value="web">WEB</option>
          <option value="acf">ACF (PT)</option>
          <option value="nvi">NVI (PT)</option>
          <option value="rvr">RVR (ES)</option>
          <option value="frlsg">FRLSG (FR)</option>
          <option value="lut">LUT (DE)</option>
          <option value="cuv">CUV (ZH)</option>
          <option value="synod">Synodal (Ru)</option>
          <option value="svd">SVD (Ar)</option>
          <option value="krv">KRV (Ko)</option>
          <option value="vi1934">1934 (Vi)</option>
          <option value="ncv">NCV (ZH)</option>
          <option value="el">Greek (EL)</option>
          <option value="eo">Esperanto (EO)</option>
          <option value="fi">Finnish (FI)</option>
          <option value="pr">Pyhä (FI)</option>
          <option value="ro">Dumitru (RO)</option>
          <option value="aa">AA (PT)</option>
          <option value="wlc">Hebrew</option>
          <option value="tr">Greek</option>
        </select>
      )}
    </div>
  );
}
