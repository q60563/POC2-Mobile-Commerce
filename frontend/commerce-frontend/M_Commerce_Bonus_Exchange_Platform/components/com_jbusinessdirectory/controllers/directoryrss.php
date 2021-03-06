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

class JBusinessDirectoryControllerDirectoryRSS extends JControllerLegacy {
	
	/**
	 * constructor (registers additional tasks to methods)
	 * @return void
	 */
	function __construct() {
		parent::__construct();
	}

	public function getCompaniesRss() {
		$model = $this->getModel('DirectoryRSS');
		$companies = $model->getCompaniesRss();
		exit();
	}

	public function getEventsRss() {
		$model = $this->getModel('DirectoryRSS');
		$events = $model->getEventsRss();
		exit();
	}

	public function getOffersRss() {
		$model = $this->getModel('DirectoryRSS');
		$offers = $model->getOffersRss();
		exit();
	}
}