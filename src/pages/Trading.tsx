import { useState } from 'react';
import AssetList from '@/components/AssetList';
import TradingChart from '@/components/TradingChart';
import TradingPanel from '@/components/TradingPanel';
import PositionsList from '@/components/PositionsList';

const Trading = () => {
  const [selectedAsset, setSelectedAsset] = useState('BTC');

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-14 bg-panel-bg border-b border-panel-border flex items-center px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-primary">TradePro</h1>
          <div className="text-sm text-muted-foreground">Professional Trading Platform</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Asset List */}
        <AssetList 
          selectedAsset={selectedAsset}
          onAssetSelect={setSelectedAsset}
        />

        {/* Center - Chart */}
        <div className="flex-1 p-4">
          <TradingChart selectedAsset={selectedAsset} />
        </div>

        {/* Right Panel - Trading */}
        <TradingPanel 
          selectedAsset={selectedAsset}
          currentPrice={108782.41} // This would come from real data
        />
      </div>

      {/* Bottom Panel - Positions */}
      <div className="h-64 p-4 pt-0">
        <PositionsList />
      </div>
    </div>
  );
};

export default Trading;