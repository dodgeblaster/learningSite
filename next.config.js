module.exports = {
  exportPathMap: function() {
    return {
      '/':                { page: '/' },
      '/intro/A':         { page: '/intro/introduction',    query: { section: 'Intro', chapter: 'A'  } },
      '/intro/B':         { page: '/intro/thingsWeNeed',    query: { section: 'Intro', chapter: 'B'  } },
      '/intro/C':         { page: '/intro/assignments',     query: { section: 'Intro', chapter: 'C'  } },
      '/intro/D':         { page: '/intro/resources',       query: { section: 'Intro', chapter: 'D'  } },
      '/intro/E':         { page: '/intro/extra',           query: { section: 'Intro', chapter: 'E'  } },

      '/chapter/1':       { page: '/chapter',   query: { section: 'Basics', chapter: '1'  } },
      '/chapter/2':       { page: '/chapter',   query: { section: 'Basics', chapter: '2'  } },
      '/chapter/3':       { page: '/chapter',   query: { section: 'Basics', chapter: '3'  } },
      '/chapter/4':       { page: '/chapter',   query: { section: 'Basics', chapter: '4'  } },
      '/chapter/5':       { page: '/chapter',   query: { section: 'Basics', chapter: '5'  } },

      '/chapter/6':       { page: '/chapter',   query: { section: 'Structure', chapter: '6'  } },
      '/chapter/7':       { page: '/chapter',   query: { section: 'Structure', chapter: '7'  } },
      '/chapter/8':       { page: '/chapter',   query: { section: 'Structure', chapter: '8'  } },
      '/chapter/9':       { page: '/chapter',   query: { section: 'Structure', chapter: '9'  } },

      '/chapter/10':       { page: '/chapter',   query: { section: 'Layout', chapter: '10'  } },
      '/chapter/11':       { page: '/chapter',   query: { section: 'Layout', chapter: '11'  } },
      '/chapter/12':       { page: '/chapter',   query: { section: 'Layout', chapter: '12'  } },
      '/chapter/13':       { page: '/chapter',   query: { section: 'Layout', chapter: '13'  } },
      '/chapter/14':       { page: '/chapter',   query: { section: 'Layout', chapter: '14'  } },

      '/chapter/15':       { page: '/chapter',   query: { section: 'Components', chapter: '15'  } },
      '/chapter/16':       { page: '/chapter',   query: { section: 'Components', chapter: '16'  } },
      '/chapter/17':       { page: '/chapter',   query: { section: 'Components', chapter: '17'  } },
      '/chapter/18':       { page: '/chapter',   query: { section: 'Components', chapter: '18'  } },
      '/chapter/19':       { page: '/chapter',   query: { section: 'Components', chapter: '19'  } },
      '/chapter/20':       { page: '/chapter',   query: { section: 'Components', chapter: '20'  } },
      '/chapter/21':       { page: '/chapter',   query: { section: 'Components', chapter: '21'  } },

      '/chapter/22':       { page: '/chapter',   query: { section: 'Advanced', chapter: '22'  } },
      '/chapter/23':       { page: '/chapter',   query: { section: 'Advanced', chapter: '23'  } },
      '/chapter/24':       { page: '/chapter',   query: { section: 'Advanced', chapter: '24'  } },
      '/chapter/25':       { page: '/chapter',   query: { section: 'Advanced', chapter: '25'  } },
      '/chapter/26':       { page: '/chapter',   query: { section: 'Advanced', chapter: '26'  } },

      '/chapter/27':       { page: '/chapter',   query: { section: 'Practical', chapter: '27'  } },
      '/chapter/28':       { page: '/chapter',   query: { section: 'Practical', chapter: '28'  } },

      '/chapter/29':       { page: '/chapter',   query: { section: 'Deployment', chapter: '29'  } },

    }
  }
}
