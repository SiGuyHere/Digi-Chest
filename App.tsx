import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { createItem, listItems, type ListItemsData } from '@dataconnect/generated';
import { dataConnect } from './src/firebase';

type Item = ListItemsData['items'][number];

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadItems = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Always read the latest server state instead of returning the cached
      // result from the previous list request.
      const result = await listItems(dataConnect, { fetchPolicy: 'SERVER_ONLY' });
      setItems(result.data.items);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not load items.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadItems();
  }, [loadItems]);

  const addDemoItem = async () => {
    setSaving(true);
    setError(null);

    try {
      await createItem(dataConnect, {
        name: `Demo Compass ${new Date().toLocaleTimeString()}`,
        latitude: 45.523,
        longitude: -122.676,
        rarity: 'Epic',
        description: 'A test treasure created from the Expo app.',
      });
      await loadItems();
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Could not create the item.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digi-Chest</Text>
      <Text style={styles.subtitle}>Firebase Data Connect is connected.</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator color="#fbbf24" size="large" />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={items.length === 0 ? styles.emptyList : undefined}
          ListEmptyComponent={<Text style={styles.emptyText}>No treasure items found yet.</Text>}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemId}>ID: {item.id}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.actions}>
        <Button title="Refresh items" onPress={() => void loadItems()} disabled={loading || saving} />
        <Button title={saving ? 'Adding…' : 'Add demo item'} onPress={() => void addDemoItem()} disabled={loading || saving} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    paddingTop: 64,
  },
  title: {
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#cbd5e1',
    marginTop: 8,
  },
  error: {
    color: '#fca5a5',
    marginTop: 16,
  },
  list: {
    flex: 1,
    marginVertical: 24,
  },
  emptyList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#94a3b8',
  },
  itemCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
  },
  itemName: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '600',
  },
  itemId: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 6,
  },
  actions: {
    gap: 12,
  },
});
