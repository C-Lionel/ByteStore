import styles from './ItemListContainer.module.css';
const ItemListContainer = ({ props }) => {
  return (
    <div className={styles.item_container}> 
      <p className={styles.text_welcome}>{props}</p>
    </div>
  );
};

export default ItemListContainer;
