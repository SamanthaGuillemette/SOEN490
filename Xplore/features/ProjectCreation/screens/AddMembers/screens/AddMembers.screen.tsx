import { SafeAreaView } from "react-native";
import styles from "./AddMembers.styles";
import { SearchBar } from "../../../../../components";
//import { Input } from "../components";

const AddMembers = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      {/* Needed components */}
      <SearchBar style={styles.searchBar} />
    </SafeAreaView>
  );
};

export default AddMembers;
