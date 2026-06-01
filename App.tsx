import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from "react-native";

const COLORS = { navy: "#08182C", gold: "#E0B93C", white: "#FFFFFF", gray: "#8A9BB0" };

const PILLARS = [
  { id: "buy", title: "Buy", subtitle: "Pre-approval & purchase strategy", icon: "🏡" },
  { id: "refinance", title: "Refinance", subtitle: "Lower rate or cash-out", icon: "🔄" },
  { id: "invest", title: "Invest", subtitle: "DSCR, rental & BRRRR", icon: "📈" },
  { id: "realtors", title: "Realtors", subtitle: "Co-brand & buyer tools", icon: "🤝" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>PMA</Text>
        <Text style={styles.tagline}>Mortgage clarity for your next move</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {PILLARS.map(p => (
          <TouchableOpacity key={p.id} style={styles.card}>
            <Text style={styles.cardIcon}>{p.icon}</Text>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{p.title}</Text>
              <Text style={styles.cardSubtitle}>{p.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.lunaBtn}>
          <Text style={styles.lunaBtnText}>Talk to Luna</Text>
          <Text style={styles.lunaBtnSub}>Your AI mortgage guide</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Premier Mortgage Advisors LLC</Text>
          <Text style={styles.footerText}>NMLS #2566750 | jose@pmafin.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.navy },
  header: { paddingTop: 60, paddingHorizontal: 24, paddingBottom: 24 },
  logo: { fontSize: 36, fontWeight: "800", color: COLORS.gold, letterSpacing: 4 },
  tagline: { fontSize: 14, color: COLORS.gray, marginTop: 4 },
  scroll: { flex: 1, paddingHorizontal: 16 },
  card: { flexDirection: "row", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 16, marginBottom: 12, alignItems: "center", borderLeftWidth: 3, borderLeftColor: COLORS.gold },
  cardIcon: { fontSize: 28, marginRight: 16 },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: "700", color: COLORS.white },
  cardSubtitle: { fontSize: 13, color: COLORS.gray, marginTop: 2 },
  lunaBtn: { backgroundColor: COLORS.gold, borderRadius: 12, padding: 20, alignItems: "center", marginVertical: 16 },
  lunaBtnText: { fontSize: 18, fontWeight: "800", color: COLORS.navy },
  lunaBtnSub: { fontSize: 13, color: "rgba(8,24,44,0.7)", marginTop: 4 },
  footer: { alignItems: "center", paddingVertical: 24 },
  footerText: { fontSize: 11, color: COLORS.gray, marginBottom: 2 },
});
