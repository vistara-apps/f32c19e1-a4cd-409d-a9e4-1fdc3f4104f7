'use client';

import { CheckCircle2, XCircle, Loader2, Clock } from 'lucide-react';

type TransactionState = 'pending' | 'confirmed' | 'failed' | 'processing';

interface TransactionStatusProps {
  state: TransactionState;
  message?: string;
}

const stateConfig = {
  pending: {
    icon: Clock,
    color: 'text-warning',
    bgColor: 'bg-warning bg-opacity-10',
    label: 'Pending',
  },
  processing: {
    icon: Loader2,
    color: 'text-accent',
    bgColor: 'bg-accent bg-opacity-10',
    label: 'Processing',
  },
  confirmed: {
    icon: CheckCircle2,
    color: 'text-success',
    bgColor: 'bg-success bg-opacity-10',
    label: 'Confirmed',
  },
  failed: {
    icon: XCircle,
    color: 'text-danger',
    bgColor: 'bg-danger bg-opacity-10',
    label: 'Failed',
  },
};

export function TransactionStatus({ state, message }: TransactionStatusProps) {
  const config = stateConfig[state];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg ${config.bgColor}`}>
      <Icon className={`w-5 h-5 ${config.color} ${state === 'processing' ? 'animate-spin' : ''}`} />
      <div className="flex-1">
        <p className={`font-semibold ${config.color}`}>{config.label}</p>
        {message && <p className="text-sm text-fg text-opacity-60 mt-1">{message}</p>}
      </div>
    </div>
  );
}
