<?php
/*------------------------------------------------------------------------
# JBusinessDirectory
# author CMSJunkie
# copyright Copyright (C) 2012 cmsjunkie.com. All Rights Reserved.
# @license - http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# Websites: http://www.cmsjunkie.com
# Technical Support:  Forum - http://www.cmsjunkie.com/forum/j-businessdirectory/?p=1
-------------------------------------------------------------------------*/

defined('_JEXEC') or die('Restricted access');

class JTableCurrency extends JTable {

	/**
	 * Constructor
	 *
	 * @param object Database connector object
	 */
	function __construct(&$db) {
		parent::__construct('#__jbusinessdirectory_currencies', 'id', $db);
	}

	function setKey($k) {
		$this->_tbl_key = $k;
	}
	
	function getCurrencies() {
		$db = JFactory::getDBO();
		$query = "select * from #__jbusinessdirectory_currencies order by currency_name";
		$db->setQuery($query);
		return $db->loadObjectList();
	}

	function getCurrencyById($currencyId) {
		$db = JFactory::getDBO();
		$query = "select * from #__jbusinessdirectory_currencies where currency_id='$currencyId'";
		$db->setQuery($query);
		return $db->loadObject();
	}
}